import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


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
    constructor(public userService: UserService) {
        userService.loginAnnounced$.subscribe(
            user => {
                if (user) {
                    this.accountName = user.name;
                } else {
                    this.accountName = "Account";
                }
            }
        )
    }
    ngOnInit() { }
}