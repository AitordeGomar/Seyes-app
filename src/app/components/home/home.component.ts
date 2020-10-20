import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: String = '';
  userList = [];
  

  constructor(private router: Router, private users: UserlistService) {}

  ngOnInit(): void {
    for (this.i; this.i <= this.users.userInfo().length - 1; this.i++) {
      this.userList.push(this.users.userInfo()[this.i].username);
    }
  }
  i = 0;


  signup() {
    this.router.navigate(['signup']);
  }
}
