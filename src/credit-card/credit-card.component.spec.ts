/**
 * Created by angel on 1/29/17.
 */
import { TestBed } from '@angular/core/testing';
import { CreditCardComponent } from './credit-card.component';
import { FormsModule } from '@angular/forms';
import {SubmittedComponent} from "./submitted.component";

describe('CreditCard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CreditCardComponent, SubmittedComponent],
            imports: [FormsModule]
        });
    });

    it ('should create CreditCardComponent', () => {
        let fixture = TestBed.createComponent(CreditCardComponent);
        expect(fixture.componentInstance instanceof CreditCardComponent).toBe(true, 'should create CrediCardComponent');
    });
});