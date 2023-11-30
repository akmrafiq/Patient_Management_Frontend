import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Utils from 'src/app/shared/helpers/utils';
import { PatientService } from 'src/app/shared/services/patient.service';
import { formErrors, validationConfig, validationMessages } from './create-patient-form.validation';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {
  form!: FormGroup;
  formErrors = formErrors;
  validationMessages = validationMessages;

  errors: string[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private patientService: PatientService,
    //private toaster: ToastrService
    ) {
    this.buildForm();
  }

  onCreate() {
    this.patientService.create(this.form.value).subscribe(() => {
      //this.toaster.success('Patient created successfully');
      this.router.navigate(['']);
    }, error => {
      this.errors = error.error.data;
    });
  }

  buildForm(): void {
    this.form = this.fb.group(validationConfig);

    this.form.valueChanges.subscribe(() => {
      this.validationMessages = validationMessages;

      Utils.onFormValueChanged(this.form, this.validationMessages, this.formErrors);
    });
  }

}
