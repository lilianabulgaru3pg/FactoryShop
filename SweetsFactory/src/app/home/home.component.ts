import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../shared/model/product';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../shared/services/product.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ngOnInit(): void { }
    products: Product[];
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.productService.productAnnounced$.subscribe(newProducts => {
            this.products = newProducts;
        });
    }
}

