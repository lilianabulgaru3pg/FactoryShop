import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { FormsModule } from '@angular/forms';

//services
import { UserService } from './shared/services/user.service'

import { NavComponent } from './shared/navbar/navbar.component';
import { SearchBarComponent } from './shared/searchbar/search.component';
import { AccountComponent } from './shared/account/account.component';
import { MenuItemComponent } from './shared/menuItem/menuItem.component';
import { ShopCartComponent } from './shared/shopcart/shopcart.component';
import { TopBarComponent } from './shared/topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './shared/product/productItem.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductItemComponent,
        SearchBarComponent,
        ShopCartComponent,
        MenuItemComponent,
        AccountComponent,
        TopBarComponent,
        NavComponent,
        HomeComponent,
        LoginComponent,
        OrdersComponent,
        CartComponent,
        ErrorComponent
    ],
    bootstrap: [AppComponent],
    providers: [UserService]
})
export class AppModule { }
