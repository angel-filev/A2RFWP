
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('Home', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [HomeComponent]});
    });

     it ('should create HomeComponent', () => {
        let fixture = TestBed.createComponent(HomeComponent);
        expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
    });

    it('should contain Hello from Angular App with Webpack', () => {
        let fixture = TestBed.createComponent(HomeComponent);
        const h1: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
        expect(h1.textContent).toContain('Hello from Angular App with Webpack');
    });

});
