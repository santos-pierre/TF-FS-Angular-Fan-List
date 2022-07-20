import { AbstractControl, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn | null {
  return (control: AbstractControl) => {
    let maDate: Date = new Date(control.value);
    if (control.value == null) return null;
    if (maDate.getFullYear() <= new Date().getFullYear() - 13) {
      return null;
    } else return { dateError: 'You are too young' };
  };
}
