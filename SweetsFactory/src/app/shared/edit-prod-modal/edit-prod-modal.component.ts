import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product } from '../model/product';
import { Category, CategoryType } from '../model/category';
import { IMAGES } from '../../mock-products';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'edit-prod-modal',
    templateUrl: './edit-prod-modal.component.html',
    styleUrls: ['./edit-prod-modal.component.css'],
})

export class EditProductModalComponent {
    @Input() productModel: Product;
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
    
    close() {
        console.log('aiciiii', this.productModel)
    }

    saveEditedProduct() {
        console.log('aiciiii3', this.productModel)
        this.productModel.category = Number(this.productModel.category);
        this.productService.editProduct(this.productModel);
    }
}