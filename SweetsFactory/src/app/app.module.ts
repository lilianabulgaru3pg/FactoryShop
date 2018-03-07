import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './shared/navbar/navbar.component';
import { SearchBarComponent } from './shared/searchbar/search.component';
import { AccountComponent } from './shared/account/account.component';
import { MenuItemComponent } from './shared/menuItem/menuItem.component';
import { CartComponent } from './shared/cart/cart.component';
import { TopBarComponent } from './shared/topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SearchBarComponent,
        CartComponent,
        MenuItemComponent,
        AccountComponent,
        TopBarComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
