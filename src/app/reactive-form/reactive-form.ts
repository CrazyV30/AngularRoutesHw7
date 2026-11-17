import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  arrEduc = ['Дошкільна освіта', 'ПЗСО', 'Професійна освіта', 'Фахова передвища освіта', 'Вища освіта'];
  arrHobbies = ['Reading', 'Sport', 'Music'];
  reactForm:FormGroup = new FormGroup({
    userName:new FormControl('', Validators.required),
    email: new FormControl('la@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confPassword: new FormControl('', [Validators.required]),
    education: new FormControl('', Validators.required),
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    hobbies: new FormArray(this.arrHobbies.map(()=>new FormControl())),
    avatar: new FormControl('', [Validators.required]),
    agreement: new FormControl(false, [Validators.requiredTrue])    
  },
  { validators:this.passwordMatchValidator }
);

  sendForm(form:FormGroup){
    if (form.valid){
      console.log("Success!");
    }
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confPassword = control.get('confPassword')?.value;

    if (password !== confPassword) {
      return { mismatch: true };
    }
    return null; 
  }
}
