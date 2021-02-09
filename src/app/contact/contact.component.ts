import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl('');
  

  constructor() { }
  
  updateName() {
    this.name.setValue('Nancy');
  }

  

  ngOnInit(): void {
  }

}
