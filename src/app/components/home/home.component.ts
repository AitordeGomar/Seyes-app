import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  testUser = '';
  i = 0;

  constructor(private router: Router, private users: UserlistService) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['dashboard']);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
