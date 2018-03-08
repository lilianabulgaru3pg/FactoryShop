import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: HomeComponent, children: [{
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: LoginComponent
                }]
            },
            { path: '**', component: ErrorComponent },
            //{ path: 'login', component: LoginComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

