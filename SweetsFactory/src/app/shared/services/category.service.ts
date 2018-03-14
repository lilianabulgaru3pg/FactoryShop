import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { CATEGORY } from '../../mock-products';
import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Stock } from '../model/stock';

@Injectable()
export class CategoryService {
    categories: Category[];
    products: Product[];
    stock: Stock[] = new Array<Stock>();

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.categories = this.getCategories();
        this.getCategoriesStock();
    }

    getCategories() {
        return CATEGORY;
    }

    getCategoryName(id: number) {

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