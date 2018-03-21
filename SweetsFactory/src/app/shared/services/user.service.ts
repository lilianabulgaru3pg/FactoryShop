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

    userLoggedIn(user: User) {
        this.currentUser = user;
        this.loginAnnouncedSource.next(user);
    }

    getUsers() {
        return USERS;
    }

    isAdmin(): boolean {
        return this.currentUser.isAdmin;
    }

    isValidUser(userName: string, password: string): boolean {
        this.isLogged = false;
        this.users.forEach(elem => {
            if (elem.name == userName && elem.password == password) {
                this.isLogged = true
                this.userLoggedIn(elem);
                return this.isLogged;
            }
        });
        return this.isLogged;
    }

    logout(){
        this.isLogged = false;
        this.currentUser = new User();
        this.loginAnnouncedSource.next(this.currentUser);
    }
}