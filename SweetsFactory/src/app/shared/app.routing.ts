import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';
import { OrdersComponent } from '../orders/orders.component';
import { CartComponent } from '../cart/cart.component';
import { CategoryComponent } from '../category/category.component';
import { HomeAdminComponent } from '../home-admin/home-admin.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', pathMatch: 'full',redirectTo: 'home'},
            { path: 'home-admin', component: HomeAdminComponent },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'my-orders', component: OrdersComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'cart', component: CartComponent },
            { path: 'category', component: CategoryComponent },
            { path: '**', component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

