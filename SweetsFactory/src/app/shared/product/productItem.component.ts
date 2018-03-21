import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'product-item',
    templateUrl: './productItem.component.html',
    styleUrls: ['./productItem.component.css'],
    animations: [
        trigger('prodItemState', [
            state('inactive', style({
                backgroundColor: 'transparent',
                opacity: 1
            })),
            state('active', style({
                top: 0,
                backgroundColor: 'white',
                opacity: 0.7
            })),
            transition('inactive => active', [
                animate(250)
            ]),
            transition('active => inactive', [
                animate(250)
            ])
        ])
    ]
})

export class ProductItemComponent {
    @Input() product: Product;
    state = 'inactive';

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}