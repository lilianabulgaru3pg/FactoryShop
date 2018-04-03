import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../shared/model/product';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../shared/services/product.service';
import { CategoryService } from '../shared/services/category.service';

@Component({
    templateUrl: './home-admin.component.html',
    styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
    products: Product[];
    header: string = "Products";

    constructor(private productService: ProductService, public categoryService: CategoryService) {
        this.products = this.productService.getProducts();
        this.productService.productAnnounced$.subscribe(newProducts => {
            this.products = newProducts;
        });
    }

    getStatus(product: Product): string {
        return this.productService.productStatus(product);
    }

    getCategoryName(product: Product): string {
        return this.categoryService.getCategoryName(product.category);
    }
}

