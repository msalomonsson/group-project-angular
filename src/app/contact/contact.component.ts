import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { 
    this.createContactForm();
  }
  
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: ['',Validators.required],  
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(5)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.value)
  } 

  goback(){
    this.contactForm.reset()
    this.submitted = false;
  }

  getErrorMessage() {
    if (this.contactForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.contactForm.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
