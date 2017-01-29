import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RoutingModule} from "../routing/routing.module";

import {AppComponent} from './app.component';
import {AccountComponent} from "../account/account.component";
import {HomeComponent} from "../home/home.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {AccountService} from "../account/account.service";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        AccountComponent,
        HomeComponent,
        PageNotFoundComponent

    ],
    bootstrap: [AppComponent],
    providers: [AccountService]
})
export class AppModule {
}
