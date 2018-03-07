import { Component } from '@angular/core';

@Component({
    selector: 'account',
    template: `
    <button class="hollow button" (click)="login()">{{account}}</button>
    `,
    styles: [`
    .button {
        border: none;
    }`]
})

export class AccountComponent {
    account = 'Account';
    constructor() { }
    login() { }
}