import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    constructor(private userService: UserService, private route: Router) { }
    ngOnInit(): void {
        if (!this.userService.isLogged) {
            this.route.navigate(['/login'])
        }
    }
}

