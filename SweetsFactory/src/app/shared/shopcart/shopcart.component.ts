import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <button class="clear button" (click)="showCart()"><a routerLink="/cart" routerLinkActive="active">{{cart}}</a></button>
        `,
    styles: [`
        .button {
            border: none;
            margin: 0;
        }`]
})

export class ShopCartComponent {
    cart = 'Cart';
    constructor() { }
    showCart() {}
    
}