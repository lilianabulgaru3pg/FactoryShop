import { Component } from '@angular/core';

export class MenuItem {
    text: String;
    path: String
}
@Component({
    selector: 'menu-item',
    template: `
        <a href={{menuItem.path}}>{{menuItem.text}}</a>
    `})

export class MenuItemComponent {
   menuItem: MenuItem;
    constructor(item: MenuItem) {
        this.menuItem = {text: item.text, path: item.path};
    }
}