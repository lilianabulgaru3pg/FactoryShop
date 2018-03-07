import { Component } from '@angular/core';

@Component({
    selector: 'account',
    template: `
    <button class="hollow button small" (click)="login()">{{account}}</button>
    `})

export class AccountComponent {
    account = 'Account';
    constructor() { }
    login(){}
}