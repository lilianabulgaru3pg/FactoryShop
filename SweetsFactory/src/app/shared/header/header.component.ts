import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-box',
    template: `
    <div class="header"><h5 class="align-self-middle">{{headerName}}</h5>
    `,
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Input() headerName: string;
    constructor() { }
}