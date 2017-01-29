
export class Account {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public isFullTime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ) {

    }
}