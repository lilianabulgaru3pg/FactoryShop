import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <button class="hollow button small" (click)="showCart()">{{cart}}</button>
    `})

export class CartComponent {
    cart = 'Cart';
    constructor() { }
    showCart() {

    }
}