/**
 * Created by angel on 1/29/17.
 */
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {OrderComponent} from "./order.component";
import {AddressComponent} from "../address/address.component";
import {CreditCardComponent} from "../credit-card/credit-card.component";
import {SubmittedComponent} from "../credit-card/submitted.component";

describe('Order', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OrderComponent, AddressComponent, CreditCardComponent, SubmittedComponent],
            imports: [FormsModule]
        });
    });

    it('should create OrderComponent', () => {
        let fixture = TestBed.createComponent(OrderComponent);
        expect(fixture.componentInstance instanceof OrderComponent).toBe(true, 'should create OrderComponent');
    });
});