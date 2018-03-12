import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/model/user';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: User = {
        id: 0, name: '', password: '', isAdmin: false
    }
    constructor(private userService: UserService) {
    }

    login(): void {
        let isValid = this.userService.validUser(this.user);
        console.log(isValid);
    }
}

