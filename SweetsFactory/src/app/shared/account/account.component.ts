import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
    accountName: string = "Account";
    logoutBox: any;
    isLogged: boolean = false;

    constructor(public userService: UserService, private route: Router) {
        this.userService.loginAnnounced$.subscribe(
            user => {
                this.isLogged = this.userService.isLogged;
                this.updateAccount(user);
            });
    }
    ngOnInit() {
        this.isLogged = this.userService.isLogged;
        let options = { closeOnClick: true, hover: true, hoverPane: true};
        let $logoutElement = $('.logout-box');
        this.logoutBox = new Foundation.Dropdown($logoutElement, options);
        if (this.isLogged) {
            this.updateAccount(this.userService.currentUser);
        }
    }

    updateAccount(newUser: User) {
        if (newUser.id) {
            this.accountName = newUser.name;
        } else {
            this.accountName = "Account";
        }
    }

    logout() {
        this.userService.logout();
        this.logoutBox.close();
        this.route.navigate(['/login']);
    }

    login() {
        if (this.isLogged) {
            this.logoutBox.open();
        }
    }
}