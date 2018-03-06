import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
    <ul class="dropdown menu" data-dropdown-menu>
    <li>
      <a href="#">Item 1</a>
      <ul class="menu">
        <li><a href="#">Item 1A</a></li>
        <!-- ... -->
      </ul>
    </li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
  </ul>
    `,
    styleUrls: ['./navbar.component.css']
})

export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const options = { /* Reveal Options, if any */ };
const $myRevealElement = $('.dropdown');
var elem = new Foundation.DropdownMenu($myRevealElement, options);
  }
}