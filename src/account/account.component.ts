/// <reference path='../../node_modules/@types/node/index.d.ts' />
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Account} from "./account.model";

@Component({
    selector: 'a2d-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {

    public model: Account = new Account();

    constructor(
        private route: ActivatedRoute) {
    }

    public submitAccount(): void {

    }

    public ngOnInit(): void {

    }
}
