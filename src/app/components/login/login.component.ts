import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  newUser: String;
  newEmail: String;
  newPassword: String;
  confirmPassword: String;

  users: {};
  constructor(private router: Router, private usersService: UserlistService) {}

  ngOnInit(): void {
    this.users = this.usersService.userInfo();
  }

  clDash() {
    this.router.navigate(['dashboard']);
  }

  signup() {
    this.newUser = document.getElementsByTagName('input')[0].value;
  this.newEmail = document.getElementsByTagName('input')[1].value;
  this.newPassword = document.getElementsByTagName('input')[2].value;
  this.confirmPassword = document.getElementsByTagName('input')[3].value;
    if (this.newUser == '' ||this.newEmail == '' || this.newPassword == '' || this.confirmPassword == '' || this.newPassword != this.confirmPassword) {
      alert('Not registered. Please try again');
    }else{
      alert('Registered. You will be sent back to the main page');
      this.router.navigate(['home']);
    }
  }
}
