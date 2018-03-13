import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styles: [`
    .button {
        border: none;
    }`]
})

export class AccountComponent implements OnInit {
    accountName: String = "Account";
    isLogedIn = this.userService.isLogged;
    
    constructor(public userService: UserService) {
        userService.loginAnnounced$.subscribe(
            user => this.updateAccount(user));
    }
    ngOnInit() { }

    updateAccount(newUser: User){
        if (newUser) {
            this.accountName = newUser.name;
        } else {
            this.accountName = "Account";
        }
    }
}