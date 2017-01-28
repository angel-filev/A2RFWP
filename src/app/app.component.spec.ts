import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ViewContainerRef} from "@angular/core";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [ViewContainerRef],
            imports: [ RouterTestingModule]
        });
    });

    it('should create appComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

});
