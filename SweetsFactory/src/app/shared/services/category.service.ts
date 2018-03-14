import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { CATEGORY } from '../../mock-products';
import { ProductService } from './product.service';
import { Product } from '../model/product';

@Injectable()
export class CategoryService {
    categories: Category[];
    products: Product[];
    stock: Map<number, number>;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.categories = this.getCategories();
        this.stock = new Map<number, number>();
        this.getCategoriesStock();
    }

    getCategories() {
        return CATEGORY;
    }

    getCategoriesStock() {
        this.categories.forEach(element => {
            let stockNo = this.getStock(element.id);
            this.stock.set(element.id, stockNo);
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

    getStockNo(category: number): number {
        return this.stock.get(category);
    }

}