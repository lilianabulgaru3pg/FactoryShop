import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <button class="hollow button" (click)="showCart()"><a routerLink="/" routerLinkActive="active">{{cart}}</a></button>
        `,
    styles: [`
        .button {
            border: none;
        }`]
})

export class CartComponent {
    cart = 'Cart';
    constructor() { }
    showCart() {}
}