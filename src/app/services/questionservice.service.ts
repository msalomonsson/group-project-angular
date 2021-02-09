import { Injectable } from '@angular/core';

import { QUESTIONS } from '../shared/questions';
import { QuestionModel } from '../shared/question.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor() { }

  getQuestions(): Observable<QuestionModel[]>{
    return of(QUESTIONS);
  }
}
