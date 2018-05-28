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
  menuTitle = 'factory.';
  menuItems: MenuItem[] = BUYER;

  constructor(public userService: UserService) {
    this.userService.loginAnnounced$.subscribe(
      user => {
        this.updateMenu();
      })
  }

  ngOnInit() {
    this.updateMenu();
  }

  updateMenu() {
    if (this.userService.isAdmin() && this.userService.isLogged) {
      this.menuItems = ADMIN;
    } else {
      this.menuItems = BUYER;
    }
  }
}