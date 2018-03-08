import { Component } from '@angular/core';

@Component({
    selector: 'account',
    template: `
            <button class="hollow button"><a routerLink="/login" routerLinkActive="active">{{account}}</a></button>
    `,
    styles: [`
    .button {
        border: none;
    }`]
})

export class AccountComponent {
    account = 'Account';
    constructor() { }
}