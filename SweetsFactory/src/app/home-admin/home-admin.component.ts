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
    sortAsc: boolean = false;
    products: Product[];
    header: string = "Products";
    editedProduct: Product = new Product();
    editProductModal: FoundationSites.Reveal;
    deleteProductModal: FoundationSites.Reveal;
    @ViewChild('editProductReveal') editProductReveal: ElementRef;
    @ViewChild('deleteProductReveal') deleteProductReveal: ElementRef;

    constructor(private productService: ProductService, public categoryService: CategoryService) {
        this.products = this.productService.getProducts();
        this.productService.productAnnounced$.subscribe(newProducts => {
            this.products = newProducts;
        });
    }

    ngOnInit(): void {
        let $editProductElem = $(this.editProductReveal.nativeElement);
        this.editProductModal = new Foundation.Reveal($editProductElem, {});

        let $deleteProductElem = $(this.deleteProductReveal.nativeElement);
        this.editProductModal = new Foundation.Reveal($deleteProductElem, {});
    }
    openEditModal(product: Product) {
        this.editedProduct = jQuery.extend(true, {}, product);
    }

    getStatus(product: Product): string {
        return this.productService.productStatus(product);
    }

    getCategoryName(product: Product): string {
        return this.categoryService.getCategoryName(product.category);
    }

    sortAscDesc() {
        this.sortAsc = this.sortAsc === false ? true : false;
        this.sortAsc ? this.products.sort((n1, n2) => (n1.name > n2.name ? 1 : -1)) : this.products.reverse();
    }

    openDeleteModal(product: Product) {
        this.editedProduct = product;
    }
}

