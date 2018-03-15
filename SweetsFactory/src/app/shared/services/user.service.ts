import { USERS } from '../mock-users'
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
    users: User[];
    currentUser: User;
    isLogged = false;
    private loginAnnouncedSource = new Subject<User>();
    loginAnnounced$ = this.loginAnnouncedSource.asObservable();

    constructor() {
        this.users = this.getUsers();
    }

    userLogedin(user: User) {
        this.loginAnnouncedSource.next(user);
    }

    getUsers() {
        return USERS;
    }

    isValidUser(userName: string, password: string): boolean {
        this.users.forEach(elem => {
            if (elem.name == userName && elem.password == password) {
                this.userLogedin(elem);
                return this.isLogged = true;
            }
        });
        return this.isLogged;
    }
}