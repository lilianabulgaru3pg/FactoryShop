import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'product-item',
    templateUrl: './productItem.component.html',
    styleUrls: ['./productItem.component.css']
})

export class ProductItemComponent {
    @Input() product: Product;
    constructor() { }
}