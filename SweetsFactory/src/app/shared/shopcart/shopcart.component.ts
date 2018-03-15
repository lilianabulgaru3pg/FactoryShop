import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <button class="hollow button" (click)="showCart()"><a routerLink="/cart" routerLinkActive="active">{{cart}}</a></button>
        `,
    styles: [`
        .button {
            border: none;
        }`]
})

export class ShopCartComponent {
    cart = 'Cart';
    constructor() { }
    showCart() {}
    
}