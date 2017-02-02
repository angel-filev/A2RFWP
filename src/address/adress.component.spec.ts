/**
 * Created by angel on 1/29/17.
 */
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {AddressComponent} from "./address.component";

describe('Address', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddressComponent],
            imports: [FormsModule]
        });
    });

    it ('should create AddressComponent', () => {
        let fixture = TestBed.createComponent(AddressComponent);
        expect(fixture.componentInstance instanceof AddressComponent).toBe(true, 'should create AddressComponent');
    });
});