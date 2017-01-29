/// <reference path='../../node_modules/@types/node/index.d.ts' />
///<reference path="account.service.ts"/>
import {Component} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Account} from "./account.model";
import {NgForm} from "@angular/forms";
import {AccountService} from "./account.service";

@Component({
    selector: 'a2d-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css']
})
export class AccountComponent {

    constructor(private accountService: AccountService){

    }
    public languages = ['English', 'Spanish', 'Other'];
    public model = new Account('', '', '', false, '', 'default');
    public hasPrimaryLanguageError = false;

    public submitAccount(form: NgForm){
        console.log(form);
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if(this.hasPrimaryLanguageError){
            return;
        }

        if(this.model.id === ''){
            this.accountService.addAccount(this.model);
        }
    }

    public validatePrimaryLanguage(value: any) {
        this.hasPrimaryLanguageError = value === 'default';
    }
}
