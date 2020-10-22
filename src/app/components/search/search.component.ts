import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public username: string;
  idUser: number;
  userList = [];
  i = 0;
  questionsList = [];
  JSON =JSON;
  btnVisitProfile:boolean = false;
  public visitedUser:string;
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private users: UserlistService,
    private questions: QuestionsService
  ) {}

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.userList = this.users.userInfo();
    this.questionsList = this.questions.getQuestions();
    console.log(this.userList);
    for (this.i; this.i <= this.userList.length - 1; this.i++) {
      if (this.userList[this.i].username != this.username) {
        continue;
      } else {
        this.idUser = this.userList[this.i].id - 1;
      }
    }
  }

  clDash() {
    this.router.navigate([this.username, 'dashboard']);
  }

  duplicate(u) {
    return this.userList[this.idUser].likes.concat(u).filter((c, index) => {
      return this.userList[this.idUser].likes.concat(u).indexOf(c) === index;
    }).length;
  }

  clAddFriend(e) {
    e.target.style.background = 'green';
    e.target.innerText = 'Request sent';
    setTimeout(() => {
      if (Math.random() <= 0.5) {
        e.target.style.display = 'none';
      } else {
        e.target.innerText = '➕';
        e.target.style.background = '';
      }
    }, 3000);
  }

  clAddTopic(e) {
    e.target.style.background = 'green';
    e.target.innerText = 'Topic has been added';
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 3000);
  }

  check(){
    console.log(this.userList[this.idUser].likes.length)
  }

  goProfile(e){
    this.visitedUser = e.target.innerText;
    console.log(this.visitedUser);
    this.btnVisitProfile = true;
  }
}
