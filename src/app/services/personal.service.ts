import { PERSONALS } from './../shared/personals';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Personal } from '../shared/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  // Func that use observable to get personal data
  getPersonal(): Observable<Personal[]>{
    return of(PERSONALS)
  }

  constructor() { }
}
