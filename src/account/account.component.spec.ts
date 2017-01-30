import { TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { FormsModule } from '@angular/forms';
import {AccountService} from "./account.service";
import {HttpModule} from "@angular/http";

describe('Account', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountComponent],
            imports: [FormsModule, HttpModule],
            providers: [AccountService]
        });
    });

    it ('should create AccountComponent', () => {
        let fixture = TestBed.createComponent(AccountComponent);
        expect(fixture.componentInstance instanceof AccountComponent).toBe(true, 'should create AccountComponent');
    });
});
