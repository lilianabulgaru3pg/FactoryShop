import { Component } from '@angular/core';

@Component({
    selector: 'account',
    template: `
        <a href="#">{{account}}</a>
    `})

export class AccountComponent {
    account = 'Account';
    constructor() { }
}