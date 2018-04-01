import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ProductService } from './shared/services/product.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './shared/services/category.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharingService } from './shared/services/sharing.service';
import { EditComponent } from './shared/edit-category/edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        EditComponent,
        ProductItemComponent,
        SearchBarComponent,
        ShopCartComponent,
        MenuItemComponent,
        AccountComponent,
        TopBarComponent,
        NavComponent,
        HomeComponent,
        HomeAdminComponent,
        LoginComponent,
        OrdersComponent,
        CartComponent,
        CategoryComponent,
        ErrorComponent
    ],
    bootstrap: [AppComponent],
    providers: [UserService, ProductService, CategoryService, SharingService]
})
export class AppModule { }
