import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../../mock-products';

@Injectable()
export class ProductService {
    products: Product[];

    constructor() {
        this.products = this.getProducts();
    }

    getProducts() {
        return PRODUCTS;
    }
}