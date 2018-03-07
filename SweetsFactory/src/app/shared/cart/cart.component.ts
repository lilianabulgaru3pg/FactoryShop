import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <button class="hollow button " (click)="showCart()">{{cart}}</button>
        `,
    styles: [`
        .button {
            border: none;
        }`]
})

export class CartComponent {
    cart = 'Cart';
    constructor() { }
    showCart() {

    }
}