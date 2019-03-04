import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


//validator function for email
function validateMail(formC: AbstractControl): {[key:string]: boolean} | null {
  if((formC.value === null) || formC.value.includes('@')) {
    return null;
  }
  return {"wrongMail": true};
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  public newUsrForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newUsrForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [null,[Validators.required, validateMail]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public save() {
    //add check everything is fine otherwise show error messsage
    //after saving the data - reset it!
    console.log(`SAVE ${JSON.stringify(this.newUsrForm.value)}`);
  }

}
