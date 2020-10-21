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
  newUser: string;
  newEmail: string;
  newPassword: string;
  confirmPassword: string;
  isSignActive:boolean = false;

  constructor(private users: UserlistService, private router:Router) {}

  ngOnInit(): void {
    for (this.i; this.i <= this.users.userInfo().length - 1; this.i++) {
      this.userList.push(this.users.userInfo()[this.i].username);
    }
  }
  i = 0;

  signup() {
    this.newUser = document.getElementsByTagName('input')[2].value;
    this.newEmail = document.getElementsByTagName('input')[3].value;
    this.newPassword = document.getElementsByTagName('input')[4].value;
    this.confirmPassword = document.getElementsByTagName('input')[5].value;
    if (
      this.newUser == '' ||
      this.newEmail == '' ||
      this.newPassword == '' ||
      this.confirmPassword == '' ||
      this.newPassword != this.confirmPassword
    ) {
      if (this.newPassword != this.confirmPassword) {
        alert('Password are not the same');
      } else {
        alert('Not registered. Please try again');
      }
    } else {
      alert('Registered.');
    }
  }

  showSignUp(){
    this.isSignActive = true;
  }
}
