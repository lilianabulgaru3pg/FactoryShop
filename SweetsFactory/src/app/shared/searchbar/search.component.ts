import { Component } from '@angular/core';

@Component({
    selector: 'search-bar',
    template: `
             <input type="search"  [(ngModel)]="textInput" placeholder="{{textInput}}">
    `,
    styleUrls: ['./search.component.css']
})

export class SearchBarComponent {
    textInput = 'Search';
    constructor() { }
}