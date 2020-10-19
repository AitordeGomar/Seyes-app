import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { UserlistService } from '../../services/userlist.service';

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
  iQuestion = 0;
  iUser = 0;
  i=0;
  username: string;
  userList = [];
  notAuthenticated: boolean = true;
  idUser:number;

  constructor(
    private router: Router,
    private questions: QuestionsService,
    private actRoute: ActivatedRoute,
    private users: UserlistService
  ) {}

  ngOnInit(): void {
    for (this.iUser; this.iUser <= this.users.userInfo().length - 1; this.iUser++) {
      this.userList.push(this.users.userInfo()[this.iUser].username);
    }
    for (this.iQuestion; this.iQuestion <= this.questions.getQuestions().length - 1; this.iQuestion++) {
      this.questionsArray.push(this.questions.getQuestions()[this.iQuestion].question);
    }
    this.rand = Math.round(
      Math.random() * (this.questions.getQuestions().length - 1)
    );
    this.question = this.questionsArray[this.rand];
    this.username = this.actRoute.snapshot.params['username'];

    for (this.iUser = 0; this.iUser <= this.userList.length - 1; this.iUser++) {
      if (this.username != this.userList[this.iUser] && this.username !== '**') {
        if (this.iUser >= this.userList.length - 1 || this.username == '') {
          this.notAuthenticated = true;
          this.router.navigate(['home']);
          break;
        }
        {
          continue;
        }
      } else {
        this.notAuthenticated = false;
        this.router.navigate([this.username, 'dashboard']);
        break;
      }
    }
    for(this.i;this.i<=this.userList.length -1;this.i++){
      if(this.userList[this.i].username != this.username){
        continue;
      }else{
        this.idUser = this.userList[this.i].id -1;
      }
    }
  }

  clUserList() {
    this.router.navigate([this.username, 'userlist']);
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
    console.log(this.questionsArray);
  }
  clSearch() {
    this.router.navigate([this.username, 'search']);
  }

  clAddQuestion() {
    this.router.navigate([this.username, 'add-questions']);
  }

  clFrList(){
    this.router.navigate([this.username, 'friendslist'])
  }
  
  clProfile(){
    this.router.navigate([this.username, 'profile']);
  }

  clLikes(){
    this.router.navigate([this.username, 'likes']);
  }
}
