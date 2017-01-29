import { TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { FormsModule } from '@angular/forms';

describe('Account', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountComponent],
            imports: [FormsModule]
        });
    });

    it ('should create AccountComponent', () => {
        let fixture = TestBed.createComponent(AccountComponent);
        expect(fixture.componentInstance instanceof AccountComponent).toBe(true, 'should create AccountComponent');
    });
});
