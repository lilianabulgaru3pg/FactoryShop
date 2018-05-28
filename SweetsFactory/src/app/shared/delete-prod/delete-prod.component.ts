import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'delete-prod-modal',
    templateUrl: './delete-prod.component.html',
    styleUrls: ['./delete-prod.component.css'],
})

export class DeleteProductModalComponent {
    @Input() deleteProductModel: Product;

    constructor(public productService: ProductService) {}

    close() {}

    deleteProduct() {
        this.productService.deleteProduct(this.deleteProductModel);
    }
}