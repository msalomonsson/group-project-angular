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
  

  // Create contactform with validators
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: ['',Validators.required],  
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(5)]]
    });
  }
  
  // When submit func
  onSubmit() {
    this.submitted = true;
    
  } 
  
  // Go back btn func
  goback(){
    this.contactForm.reset()
    this.submitted = false;
  }

  
  ngOnInit(): void {
  }

}
