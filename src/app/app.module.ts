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
import {CreditCardComponent} from "../credit-card/credit-card.component";
import {SubmittedComponent} from "../credit-card/submitted.component";
import {OrderComponent} from "../order/order.component";
import {AddressComponent} from "../address/address.component";


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
        AddressComponent,
        CreditCardComponent,
        HomeComponent,
        OrderComponent,
        PageNotFoundComponent,
        SubmittedComponent

    ],
    bootstrap: [AppComponent],
    providers: [AccountService]
})
export class AppModule {
}
