import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../shared/model/product';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../shared/services/product.service';

@Component({
    templateUrl: './home-admin.component.html',
    styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
    products: Product[];
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}

