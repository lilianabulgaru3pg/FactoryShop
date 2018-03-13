import { Component, Output } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    showMessage = false;
    account = {
        name: '', 
        password: ''
    }
    constructor(private userService: UserService, private route: Router) {
    }

    login(): void {
        let isLogged = this.userService.isValidUser(this.account.name, this.account.password)
        if (isLogged) {
            this.route.navigate(['/home']);
        } else {
            this.showMessage = true;
        }
    }
}

