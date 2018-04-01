import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category, CategoryType } from '../model/category';

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

    constructor(public categoryService: CategoryService, myElement: ElementRef) {
        this.categories = this.categoryService.categories;
        this.categoryService.categoryAnnounced$.subscribe(
            newCategories => {
                this.categories = this.categoryService.categories;
            }
        )
    }

    ngOnInit(): void { }

    ngOnChanges(changes: any) {
    }

    openNewCategoryModal() {
        let options = { resetOnClose: true };
        let $addProductElement = $(this.addProductReveal.nativeElement);
        this.addProductModal = new Foundation.Reveal($addProductElement, options);
        this.addProductModal.open();
    }

    close() { 
        this.addProductModal.close();
    }
}