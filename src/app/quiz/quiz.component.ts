import { QuestionService } from './../services/question.service';
import { Component, OnInit } from '@angular/core';
import { QuestionModel } from "../shared/question.model";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions!: QuestionModel[];
  answer = false;
  num = 0;
  points = 0;
  maxquestions!: number;
  finished = false;
  value = 0;
  

  constructor(private questionservice: QuestionService) { }

  ngOnInit(): void {
    this.start()
  }

  checkAnswer(answer: String, e:Event){
    if(answer === this.questions[this.num].answer){
      this.points++;
      this.value += 25;
      (e.target as HTMLElement).classList.add('right');
      this.num++
    }else{
      this.value += 25;
      this.num++
    }
    if(this.num === 4){
      this.finished = true;
    }
  }


  start(){
    this.questionservice.getQuestion()
    .subscribe((question) => this.questions = question)
    this.maxquestions = this.questions.length
    
    console.log(this.questions)

    this.num = 0;
    this.points = 0;
    this.value = 0;
    this.finished = false;
  }
}
