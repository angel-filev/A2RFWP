/// <reference path='../../node_modules/@types/node/index.d.ts' />

import {Component, ViewChild} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Order} from "./order.model";
import {CreditCard} from "../credit-card/credit-card.model";
import {NgForm} from "@angular/forms";
import {Address} from "../address/adress.model";
import {AddressComponent} from "../address/address.component";
import {CreditCardComponent} from "../credit-card/credit-card.component";

@Component({
    selector: 'a2d-order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.css']
})
export class OrderComponent {

    public submitted = false;

    public order = new Order(new CreditCard(1, '', '', ''), new Address('', '', ''));

    @ViewChild(AddressComponent)
    private address: AddressComponent;

    @ViewChild(CreditCardComponent)
    private creditCard: CreditCardComponent;

    public onSubmit(orderForm: NgForm){
        this.address.onSubmit()
        this.creditCard.onSubmit()

        console.log("Address Form: " + this.address.addressForm.form.valid);
        console.log("Credit Form: " + this.creditCard.creditCardForm.form.valid);

    }

}
