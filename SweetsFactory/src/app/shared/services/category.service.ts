import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { CATEGORY } from '../../mock-products';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Stock } from '../model/stock';
import { Subject } from 'rxjs';

@Injectable()
export class CategoryService {
    categories: Category[];
    products: Product[];
    stock: Stock[] = new Array<Stock>();
    private categoryAnnouncedSource = new Subject<Stock[]>();
    categoryAnnounced$ = this.categoryAnnouncedSource.asObservable();

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.categories = CATEGORY;
        this.getCategoriesStock();
    }

    saveCategory(newCategoryName: string) {
        let newCategory = new Category();
        newCategory.name = newCategoryName;
        newCategory.id = Math.floor(Math.random());
        this.categories.push(newCategory);
        let newCategoryStock = new Stock(newCategoryName, 0);
        this.stock.push(newCategoryStock);
        this.categoryAnnouncedSource.next(this.stock);
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
}