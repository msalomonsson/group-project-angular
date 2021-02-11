import { QUESTIONS } from './../shared/questions';
import { QuestionModel } from './../shared/question.model';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  // Func that use observable to get question data
  getQuestion(): Observable<QuestionModel[]>{
    return of (QUESTIONS)
  }
}
