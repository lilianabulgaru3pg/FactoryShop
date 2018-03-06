import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: `
        <a href="#">{{cart}}</a>
    `})

export class CartComponent {
    cart = 'Cart';
    constructor() { }
}