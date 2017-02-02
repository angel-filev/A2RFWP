import {CreditCard} from "../credit-card/credit-card.model";
import {Address} from "../address/adress.model";

export class Order {
    constructor(
        public creditCard: CreditCard,
        public address: Address
    ) {

    }
}