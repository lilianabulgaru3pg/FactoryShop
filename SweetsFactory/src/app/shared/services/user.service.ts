import { USERS } from '../mock-users'
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs';
import { SharingService } from './sharing.service';

@Injectable()
export class UserService {
    users: User[];
    currentUser: User;
    isLogged = false;
    private loginAnnouncedSource = new Subject<User>();
    loginAnnounced$ = this.loginAnnouncedSource.asObservable();

    constructor(public sharingService: SharingService) {
        this.users = this.getUsers();
        let storedData = this.sharingService.hasUserData();
        if (storedData) {
            this.currentUser = this.sharingService.getUserData();
            this.isLogged = true;
            this.loginAnnouncedSource.next(this.currentUser);
        }
    }

    userLoggedIn(user: User) {
        this.currentUser = user;
        this.sharingService.setUserData(this.currentUser);
        this.loginAnnouncedSource.next(this.currentUser);
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

    logout() {
        this.isLogged = false;
        this.currentUser = new User();
        this.loginAnnouncedSource.next(this.currentUser);
        this.sharingService.clearUserData();
    }
}