import { Component } from '@angular/core';

@Component({
    selector: 'search-bar',
    template: `
             <input type="search" placeholder="{{placeholder}}">
    `,
    styleUrls: ['./search.component.css']
})

export class SearchBarComponent {
    placeholder = 'Search';
    constructor() { }
}