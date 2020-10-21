import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
username:string ='';
userPassword: String;
authUser:string;
i=0;
userList = []
isNavActive:boolean = false;
isLoginActive:boolean = true;
document = document;
confirmOut:boolean = false;
// authUser:string;
  constructor(private actRoute: ActivatedRoute,private router: Router, private users: UserlistService) { }

  ngOnInit(): void {
    if(this.actRoute.snapshot.params['username'] !== this.username){
      this.router.navigate(['forbidden']);
    }
    this.username = this.actRoute.snapshot.params['username'];
    for (this.i; this.i <= this.users.userInfo().length - 1; this.i++) {
      this.userList.push(this.users.userInfo()[this.i].username);
    }
  }

  clSearch() {
    this.router.navigate([this.username, 'search']);
  }
  clProfile(){
    this.router.navigate([this.username, 'profile']);
  }
  clLikes(){
    this.router.navigate([this.username, 'likes']);
  }
  clFrList(){
    this.router.navigate([this.username, 'friendslist'])
  }
  clUserList() {
    this.router.navigate([this.username, 'userlist']);
  }
  clDash(){
    this.router.navigate([this.username , 'dashboard'])
  }
  logout() {
    this.confirmOut =confirm('Are you sure you want to log out?');
    if(this.confirmOut){
    this.isNavActive = false;
    this.isLoginActive = true;
    this.router.navigate(['home']);
    this.username = undefined;}else{
    }
  }
  login() {
    for (this.i = 0; this.i <= this.userList.length - 1; this.i++) {
      if (this.username != this.userList[this.i] || this.username === undefined) {
        if (this.i >= this.userList.length - 1) {
          alert('User not registered. Please sign up instead');
          break;
        }
      } else {
        if (this.userPassword != this.users.userInfo()[this.i].password) {
          alert('Wrong password. Please try again');
          break;
        } else {
          this.isNavActive = true;
          this.isLoginActive = false;
          this.router.navigate([this.username,'dashboard']);
          break;
        }
      }
    }
  }
}
