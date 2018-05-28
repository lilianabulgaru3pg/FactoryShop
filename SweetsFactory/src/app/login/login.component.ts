import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showMessage = false;
    isAdmin: boolean = false;
    account = {
        name: '',
        password: ''
    }
    constructor(private userService: UserService, private route: Router) {
        this.userService.loginAnnounced$.subscribe(
            user => {
                this.isAdmin = user.isAdmin;
            }
        )
    }

    ngOnInit() {
        if (this.userService.isLogged) {
            this.isAdmin = this.userService.currentUser.isAdmin;
        }
    }

    login() {
        let isLogged = this.userService.isValidUser(this.account.name, this.account.password)
        if (isLogged) {
            this.isAdmin ? this.route.navigate(['/home-admin']) : this.route.navigate(['/home']);
        } else {
            this.showMessage = true;
        }
    }
}

