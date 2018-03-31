import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../../mock-products';

@Injectable()
export class ProductService {
    products: Product[];

    constructor() {
        this.products = this.getProducts();
    }

    productStatus(product: Product): string {
        return product.stock != 0 ? 'available' : 'out of stock'
    }

    getProducts() {
        return PRODUCTS;
    }

    getProductsForCategory(categoryId: number): Array<Product> {
        var products = new Array<Product>();
        this.products.forEach(product => {
            if (categoryId === product.category){
                products.push(product);
            }
        });
        return products;
    }
}