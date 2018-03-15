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
    isLogedIn = this.userService.isLogged;
    logoutBox: any;

    constructor(public userService: UserService,  private route: Router) {
        userService.loginAnnounced$.subscribe(
            user => this.updateAccount(user));
    }
    ngOnInit() {
    }

    updateAccount(newUser: User) {
        if (newUser.id) {
            this.accountName = newUser.name;
            const options = { /* Reveal Options, if any */ };
            const $logoutElement = $('.logout-box');
            this.logoutBox = new Foundation.Dropdown($logoutElement, options);
        } else {
            this.accountName = "Account";
        }
        this.isLogedIn = this.userService.isLogged;
    }

    logout() {
       console.log('logout');
       this.userService.logout();
       this.accountName = "Account";
       this.logoutBox.close();
       this.route.navigate(['/home']);
    }
}