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
        let storedData = this.sharingService.hasCategoryData();
        if (storedData) {
            this.categories = this.sharingService.getCategoryData();
        } else {
            this.categories = CATEGORY;
        }
        this.getCategoryByType();
    }

    saveCategory(newCategoryName: string) {
        let newCategory = new Category();
        newCategory.name = newCategoryName;
        let newId = Math.floor(Math.random() * 100) + 4;
        newCategory.id = newId
        this.categories.push(newCategory);
        this.sharingService.setCategoryData(this.categories);

        let newCategoryType = new CategoryType();
        newCategoryType.name = newCategoryName;
        newCategoryType.categoryId = newId;
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
        this.categories.forEach(elem => {
            let products: Array<Product> = this.productService.getProductsForCategory(elem.id);
            if (products) {
                let categoryType = new CategoryType();
                categoryType.name = elem.name;
                categoryType.categoryId = elem.id;
                categoryType.products = products;
                this.categoryTypes.push(categoryType);
            }
        });
    }

}