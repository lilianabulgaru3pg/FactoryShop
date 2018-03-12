import { USERS } from '../mock-users'
import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users: User[]
    constructor() {
        this.users = this.getUsers();
    }

    getUsers() {
        return USERS;
    }

    validUser(user: User) {
        let isValid = false;
        this.users.forEach(elem => {
            if (elem.name == user.name && elem.password == user.password) {
                isValid = true;
                return isValid;
            }
        });
        return isValid;
    }
}