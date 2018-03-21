import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    showMessage = false;
    isAdmin = false;

    account = {
        name: '',
        password: ''
    }
    constructor(private userService: UserService, private route: Router) {
        userService.loginAnnounced$.subscribe(
            user => {
                this.isAdmin = user.isAdmin;
            }
        )
    }

    login(): void {
        let isLogged = this.userService.isValidUser(this.account.name, this.account.password)
        if (isLogged) {
            this.isAdmin ? this.route.navigate(['/home-admin']) : this.route.navigate(['/home']);
        } else {
            this.showMessage = true;
        }
    }
}

