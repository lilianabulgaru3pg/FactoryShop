import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../shared/model/product';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../shared/services/product.service';
import { CategoryService } from '../shared/services/category.service';

@Component({
    templateUrl: './home-admin.component.html',
    styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
    products: Product[];
    header: string = "Products";
    editedProduct: Product;
    editProductModal: FoundationSites.Reveal;
    @ViewChild('editProductReveal') editProductReveal: ElementRef;

    constructor(private productService: ProductService, public categoryService: CategoryService) {
        this.products = this.productService.getProducts();
        this.productService.productAnnounced$.subscribe(newProducts => {
            this.products = newProducts;
        });
        this.editedProduct = new Product();
    }

    ngOnInit(): void {
        let options = {};
        let $editProductElem = $(this.editProductReveal.nativeElement);
        this.editProductModal = new Foundation.Reveal($editProductElem, options);
    }
    openModal(product: Product) {
        this.editedProduct = Object.assign({},product);
    }

    getStatus(product: Product): string {
        return this.productService.productStatus(product);
    }

    getCategoryName(product: Product): string {
        return this.categoryService.getCategoryName(product.category);
    }
}

