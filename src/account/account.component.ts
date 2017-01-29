/// <reference path='../../node_modules/@types/node/index.d.ts' />
import {Component} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Account} from "./account.model";

@Component({
    selector: 'a2d-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css']
})
export class AccountComponent {

    public languages = ['English', 'Spanish', 'Other'];
    public model = new Account('', '', false, '', 'default');
    public hasPrimaryLanguageError = false;

    public validatePrimaryLanguage(value: any) {
        this.hasPrimaryLanguageError = value === 'default';
    }
}
