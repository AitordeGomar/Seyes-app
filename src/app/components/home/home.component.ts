import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: String = '';
  userList = [];
  userPassword: String;

  constructor(private router: Router, private users: UserlistService) {}

  ngOnInit(): void {
    for (this.i; this.i <= this.users.userInfo().length - 1; this.i++) {
      this.userList.push(this.users.userInfo()[this.i].username);
    }
  }
  i = 0;

  login() {
    for (this.i = 0; this.i <= this.userList.length - 1; this.i++) {
      if (this.username != this.userList[this.i]) {
        if (this.i >= this.userList.length - 1 || this.username == '') {
          alert('User not registered. Please sign up instead');
          break;
        }
      } else {
        if (this.userPassword != this.users.userInfo()[this.i].password) {
          alert('Wrong password. Please try again');
          break;
        } else {
          this.router.navigate([this.username,'dashboard']);
          break;
        }
      }
    }
  }
  signup() {
    this.router.navigate(['signup']);
  }
}
