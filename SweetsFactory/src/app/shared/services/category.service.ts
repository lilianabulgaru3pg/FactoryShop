import { Injectable } from '@angular/core';
import { Category, CategoryType } from '../model/category';
import { CATEGORY } from '../../mock-products';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Stock } from '../model/stock';
import { Subject } from 'rxjs';
import { SharingService } from './sharing.service';

@Injectable()
export class CategoryService {
    categories: Category[];
    products: Product[];
    categoryTypes: CategoryType[] = new Array<CategoryType>();
    stock: Stock[] = new Array<Stock>();
    private categoryAnnouncedSource = new Subject<CategoryType[]>();
    categoryAnnounced$ = this.categoryAnnouncedSource.asObservable();

    constructor(private productService: ProductService, private sharingService: SharingService) {
        this.products = this.productService.getProducts();
        if (this.sharingService.hasCategoryData()) {
            this.categories = this.sharingService.getCategoryData();
        } else {
            this.categories = CATEGORY;
        }
        this.productService.productAnnounced$.subscribe(newProducts => {
            this.products = newProducts;
            this.getCategoryByType();
        });
        this.getCategoryByType();
    }

    saveCategory(newCategory: Category) {
        this.categories.push(newCategory);
        this.sharingService.setCategoryData(this.categories);

        let newCategoryType = new CategoryType();
        newCategoryType.name = newCategory.name;
        newCategoryType.categoryId = newCategory.id;
        newCategoryType.products = new Array<Product>();
        this.categoryTypes.push(newCategoryType);
        this.categoryAnnouncedSource.next(this.categoryTypes);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoriesStock() {
        this.categories.forEach(element => {
            let stockNo = this.getStock(element.id);
            this.stock.push(new Stock(element.name, stockNo));
        });
    }

    private getStock(categoryId: number): number {
        var no: number = 0;
        this.products.forEach(element => {
            if (categoryId == element.category) {
                no = no + element.stock;
            }
        });
        return no;
    }

    getCategoryName(categoryId: number): string {
        var categoryName = '';
        this.categories.forEach(elem => {
            if (categoryId === elem.id) {
                categoryName = elem.name;
            }
        });
        return categoryName;
    }

    getCategoryByType() {
        var newCategoryType = new Array<CategoryType>();
        this.categories.forEach(elem => {
            let products: Array<Product> = this.productService.getProductsForCategory(elem.id);
            let categoryType = new CategoryType();
            categoryType.name = elem.name;
            categoryType.categoryId = elem.id;
            categoryType.products = products;
            newCategoryType.push(categoryType);
        });
        this.categoryTypes = newCategoryType;
        this.categoryAnnouncedSource.next(this.categoryTypes);
    }

    editCategory(categoryType: CategoryType) {
        this.categoryTypes.forEach(category => {
            if (category.categoryId === categoryType.categoryId) {
                category.name = categoryType.name;
                category.products = categoryType.products;
            }
        });

        this.categories.forEach(category => {
            if (categoryType.categoryId === category.id) {
                category.name = categoryType.name;
            }
        });
        this.sharingService.setCategoryData(this.categories);
        this.categoryAnnouncedSource.next(this.categoryTypes);
    }
}