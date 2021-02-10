import { QUESTIONS } from './../shared/questions';
import { QuestionModel } from './../shared/question.model';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestion(): Observable<QuestionModel[]>{
    return of (QUESTIONS)
  }
}
