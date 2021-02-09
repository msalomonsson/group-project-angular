import { PersonalService } from './../services/personal.service';
import { PERSONALS } from './../shared/personals';
import { Component, OnInit } from '@angular/core';
import { Personal } from '../shared/personal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  personals: Personal[] = PERSONALS;


  constructor(private personservice: PersonalService) { }

  ngOnInit(): void {

    this.personservice.getPersonal()
    .subscribe((personal) => this.personals = personal)
    
  }

}
