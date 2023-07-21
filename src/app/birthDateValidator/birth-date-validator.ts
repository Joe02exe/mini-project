import { AbstractControl, ValidationErrors } from "@angular/forms";

export class BirthDateValidator {

    static dateBeforeTodayValidator(control: AbstractControl): ValidationErrors | null {
        const selectedDate = control.get('birthDate')?.value;
        const currentDate = new Date();
      
        if (selectedDate && selectedDate > currentDate) {
            return { dateBeforeToday: true };
        }
      
        return null;
    };  
}
