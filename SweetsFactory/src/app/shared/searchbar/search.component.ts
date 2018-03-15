import { Component } from '@angular/core';

@Component({
    selector: 'search-bar',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchBarComponent {
    textInput = 'Search';
    constructor() { }
}