import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../../services/questionservice.service';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent implements OnInit {
  questionsArray!: object;
  constructor(private questionsService: QuestionserviceService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(questions => {
      this.questionsArray = questions;
    });
  }

}
