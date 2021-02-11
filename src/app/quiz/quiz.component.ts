import { QuestionService } from './../services/question.service';
import { Component, OnInit } from '@angular/core';
import { QuestionModel } from "../shared/question.model";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  // Declare variables/state
  questions!: QuestionModel[];
  answer = false;
  num = 0;
  points = 0;
  maxquestions!: number;

  // Progress bar value
  value = 0;
  

  constructor(private questionservice: QuestionService) { }

  ngOnInit(): void {
    this.start()
  }

  checkAnswer(answer: String, e:Event){
    // If right answer
    if(answer === this.questions[this.num].answer){
      this.points++;
      this.value += 25;
      (e.target as HTMLElement).classList.add('right');

      setTimeout(() => {
        this.num++
      }, 1000);
    }
    // If wrong answer
    else{
      this.value += 25;
      (e.target as HTMLElement).classList.add('wrong');
      setTimeout(() => {
        this.num++
      }, 1000);
    }

  }


  // Start game func
  start(){
    // Get questions
    this.questionservice.getQuestion()
    .subscribe((question) => this.questions = question)
    this.maxquestions = this.questions.length
    

    // Reset state
    this.num = 0;
    this.points = 0;
    this.value = 0;
  }
}
