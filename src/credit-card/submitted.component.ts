/**
 * Created by angel on 1/29/17.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CreditCard} from "./credit-card.model";

@Component({
    selector: 'credit-card-submitted',
    template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ creditCard.name }}</div>
    </div>
     <div class="row">
      <div class="col-xs-3">Credit Card Brand</div>
      <div class="col-xs-9 pull-left">{{ creditCard.brand }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Number</div>
      <div class="col-xs-9 pull-left">{{ creditCard.creditCardNumber }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})
export class SubmittedComponent {
    @Input()  creditCard: CreditCard;
    @Input()  submitted = false;
    @Output() submittedChange = new EventEmitter<boolean>();
    onClick() { this.submittedChange.emit(false); }
}
