import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
username:string;
  constructor(private actRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
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
    this.router.navigate(['home']);
  }
}
