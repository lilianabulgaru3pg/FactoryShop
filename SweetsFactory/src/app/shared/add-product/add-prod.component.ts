import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category, CategoryType } from '../model/category';
import { IMAGES } from '../../mock-products';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'add-prod',
    templateUrl: './add-prod.component.html',
    styleUrls: ['./add-prod.component.css'],
})

export class AddProductComponent implements OnInit {
    @ViewChild('addProductReveal') addProductReveal: ElementRef;
    newProduct: Product = new Product();
    addProductModal: FoundationSites.Reveal;
    categories: Category[];
    images = IMAGES;

    constructor(public productService: ProductService, public categoryService: CategoryService, myElement: ElementRef) {
        this.categories = this.categoryService.categories;
        this.categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                this.categories = this.categoryService.categories;
            }
        )
    }

    ngOnInit(): void { 
        let options = { };
        let $addProductElement = $(this.addProductReveal.nativeElement);
        this.addProductModal = new Foundation.Reveal($addProductElement, options);
    }

    ngOnChanges(changes: any) {
    }

    openNewProductModal() {

    }

    close() { 
        this.addProductModal.close();
    }

    saveNewProduct(){
        this.newProduct.category = Number(this.newProduct.category);
        this.productService.saveNewProduct(jQuery.extend(true, {},this.newProduct));
        this.addProductModal.close();
    }
}