import { Component, OnInit } from '@angular/core';
import { MenuItemComponent, MenuItem } from '../menuItem/menuItem.component';
import { UserService } from '../services/user.service';
import { BUYER, ADMIN } from '../mock-users';


@Component({
  selector: 'navi-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavComponent implements OnInit {
  menuTitle = 'Factory.'; //TODO: trebuie scos intr-un fisier
  menuItems: MenuItem[] = BUYER;
  isAdmin = false;

  constructor(public userService: UserService) {
    userService.loginAnnounced$.subscribe(
      user => this.isAdmin = user.isAdmin
    )
  }

  ngOnInit() {
    const options = { /* Reveal Options, if any */ };
    const $menuElement = $('.main-meniu');
    var elem = new Foundation.AccordionMenu($menuElement, options);
    this.showmenu();
  }

  showmenu() {
    if (!this.isAdmin) {
        this.menuItems = BUYER;
    } else {
      this.menuItems = ADMIN;
    }
  }
}