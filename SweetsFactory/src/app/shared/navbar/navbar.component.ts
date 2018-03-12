import { Component, OnInit } from '@angular/core';
import { MenuItemComponent, MenuItem } from '../menuItem/menuItem.component';


@Component({
  selector: 'navi-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavComponent implements OnInit {
  menuTitle = 'Sweets Factory'; //TODO: trebuie scos intr-un fisier
  menuItems : any[];

  constructor() { 
    this.menuItems = [];
  }

  ngOnInit() {
    const options = { /* Reveal Options, if any */ };
    const $menuElement = $('.main-meniu');
    var elem = new Foundation.AccordionMenu($menuElement, options);

    this.addMenuItem('Home', '/home');
    this.addMenuItem('Category', '/#');
    this.addMenuItem('Products', '/#');
  }
  addMenuItem(name: String, path: String ){
     var item : MenuItem = {text: name, path: path};
    this.menuItems.push(item);
  }
}