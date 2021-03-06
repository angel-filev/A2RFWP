/* tslint:disable: member-ordering forin */
import {Component, AfterViewChecked, ViewChild, Input} from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';
import {CreditCard} from "./credit-card.model";

@Component({
    selector: 'a2d-credit-card',
    templateUrl: './credit-card.component.html'
})
export class CreditCardComponent implements AfterViewChecked {

    public brands = ['American Express', 'Discover', 'Master Card', 'Visa'];

    @Input() public creditCard: CreditCard;
    //@Input() public creditCard: CreditCard = new CreditCard(1, '','','default');

    public submitted = false;

    public onSubmit() {
        let form = this.creditCardForm.form;
        this.markAllFormControlsAsDirty(form);
        this.onValueChanged(null);
        if(form.valid){
            this.submitted = true;
        }
    }

    private markAllFormControlsAsDirty(form:FormGroup) {
        //form.markAsDirty(true);
        for (const control in form.controls) {
            form.get(control).markAsDirty(true);
        }
    }

    // Reset the form with a new creditCard AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    public active = true;

    public addCreditCard() {
        this.creditCard = new CreditCard(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    public creditCardForm: NgForm;
    @ViewChild('creditCardForm') public currentForm: NgForm;

    public ngAfterViewChecked() {
        this.formChanged();
    }

    public formChanged() {
        if (this.currentForm === this.creditCardForm) {
            return;
        }
        this.creditCardForm = this.currentForm;
        if (this.creditCardForm) {
            this.creditCardForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    public onValueChanged(data?: any) {
        if (!this.creditCardForm) {
            return;
        }
        const form = this.creditCardForm.form;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    public formErrors = {
        'name': '',
        'brand': '',
        'creditCardNumber': ''
    };

    public validationMessages = {
        'name': {
            'required':      'Name is required.',
            'minlength':     'Name must be at least 4 characters long.',
            'maxlength':     'Name cannot be more than 24 characters long.'
        },
        'brand': {
            'required': 'Credit card association brand is required.'
        },
        'creditCardNumber': {
            'required': 'Credit card number is required.',
            'minlength': 'Name must be at least 15 characters long.',
            'maxlength': 'Name cannot be more than 16 characters long.',
        }
    };
}
