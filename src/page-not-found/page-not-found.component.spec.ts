/**
 * Created by K23900 on 1/27/2017.
 */
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PageNotFoundComponent ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should contain 404 Page Not Found', () => {
        const h1: HTMLElement = fixture.debugElement.query(By.css('h1')).nativeElement;
        expect(h1.textContent).toContain('404 Page Not Found');
    });
});
