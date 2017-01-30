/**
 * Created by angel on 1/29/17.
 */
export class CreditCard {
    constructor(
        public id: number,
        public name: string,
        public brand: string,
        public creditCardNumber?: string
    ) {  }
}