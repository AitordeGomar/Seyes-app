import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  questionsArray = [];

  question: string;
  rand: number;

  constructor(private router: Router, private questions: QuestionsService) {}

  ngOnInit(): void {
    for (
      this.i = 0;
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

  i = 0;

  logout() {
    this.router.navigate(['home']);
  }
  click() {

    this.questionsArray.splice(this.rand-1, this.rand-1);
    this.rand = Math.round(
      Math.random() * (this.questions.getQuestions().length - 1)
    );
    this.question = this.questionsArray[this.rand];
    // console.log(this.rand);
    // console.log(this.questionsArray);
  }
}
