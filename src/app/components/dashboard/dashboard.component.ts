import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  questionsArray = [];
  hideIt = true;
  question: string;
  rand: number;
  btnQuestion = document.getElementsByClassName('btnQuestion');
  i = 0;


  constructor(private router: Router, private questions: QuestionsService) {}

  ngOnInit(): void {
    for (
      this.i;
      this.i <= this.questions.getQuestions().length - 1;
      this.i++
    ) {
      this.questionsArray.push(this.questions.getQuestions()[this.i].question);
    }
    this.rand = Math.round(
      Math.random() * (this.questions.getQuestions().length - 1)
    );
    this.question = this.questionsArray[this.rand];
  }

  

  logout() {
    this.router.navigate(['home']);
  }
  click() {
    this.questionsArray.splice(this.rand, 1);

    this.rand = Math.round(Math.random() * (this.questionsArray.length - 1));
    if (this.questionsArray.length == 0) {
      this.hideIt = false;
    } else {
      this.question = this.questionsArray[this.rand];
    }
  }
  clSearch(){
    this.router.navigate(['search']);
  }

  clAddQuestion(){
    this.router.navigate(['add-questions'])
  }
}
