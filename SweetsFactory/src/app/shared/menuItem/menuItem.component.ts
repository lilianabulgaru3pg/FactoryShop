import { Component, Input } from '@angular/core';

export class MenuItem {
     text: String;
     path: String
}
@Component({
    selector: 'menu-item',
    template: `
        <a class="text-center" routerLink={{path}} routerLinkActive="active">{{text}}</a>
    `,
    styles: [`
    a {
        color: white;
    }`]
})

export class MenuItemComponent {
    @Input() text: String;
    @Input() path: String;
    constructor() {
    }
}