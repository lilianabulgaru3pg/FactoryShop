import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../shared/model/product';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']    
})
export class HomeComponent {
    products: Product[] = PRODUCTS;
    
}

