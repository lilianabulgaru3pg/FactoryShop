import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs';
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