import { ContactComponent } from './contact/contact.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { QuizGameComponent } from './quiz/quiz-game/quiz-game.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'quizquestion', component: QuizGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
