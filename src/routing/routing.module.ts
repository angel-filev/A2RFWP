import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import {CreditCardComponent} from "../credit-card/credit-card.component";
import {OrderComponent} from "../order/order.component";

// Pulls the routes into a variable. You might export it in future and it clarifies the Routing Module pattern.
const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'account', component: AccountComponent },
    { path: 'credit-card', component: CreditCardComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', component: PageNotFoundComponent }
];

// 1. Adds RouterModule.forRoot(routes) to imports.
// 2. Adds RouterModule to exports so that the components in the companion module have access to Router declarables such as RouterLink
//    and RouterOutlet.
// 3. Go old-school with the HashLocationStrategy by providing the {useHash: true} in an object as the second argument of the
//    RouterModule.forRoot in the AppModule.
//    see https://angular.io/docs/ts/latest/guide/router.html#!#link-parameters-array (search for section called "HashLocationStrategy")
//    Using  HashLocationStrategy solves the refresh 404 issue that is observed when IIS is trying to resolve angular rendered path.
//    At the same time it allows application to support IIS for legacy pages.
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class RoutingModule {
}
