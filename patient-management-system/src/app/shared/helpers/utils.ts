import { FormGroup } from "@angular/forms";

export default class Utils {
  static onFormValueChanged(form: FormGroup, validationMsg: any, errors: any): void {
    for (const field in errors) {
      if (errors.hasOwnProperty(field)) {
        errors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMsg[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              errors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
