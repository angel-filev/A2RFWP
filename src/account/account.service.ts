/**
 * Created by angel on 1/29/17.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Account} from "./account.model";

@Injectable()
export class AccountService{
    public constructor(private http: Http){
              console.log(http);
    }

    public addAccount(account: Account) {
         console.log(account);
     }
}