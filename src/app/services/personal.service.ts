import { PERSONALS } from './../shared/personals';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Personal } from '../shared/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {


  getPersonal(): Observable<Personal[]>{
    return of(PERSONALS)
  }

  constructor() { }
}
