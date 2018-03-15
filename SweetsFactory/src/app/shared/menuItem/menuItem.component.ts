import { Component, Input } from '@angular/core';

export class MenuItem {
    pathName: string;
    path: string
}
@Component({
    selector: 'menu-item',
    template: `
        <button><a class="text-center" routerLink={{path}} routerLinkActive="active">{{pathName}}</a></button>
    `,
    styles: [`
    a {
        color: white;
    }`]
})

export class MenuItemComponent {
    @Input() pathName: string;
    @Input() path: string;
    constructor() { }
}