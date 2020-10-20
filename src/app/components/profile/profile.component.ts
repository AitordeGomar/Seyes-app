import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  iUser:number = 0;
  notAuthenticated:boolean = true;
  userList = []
  constructor(private router:Router, private actRoute: ActivatedRoute,private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    for (this.iUser; this.iUser <= this.users.userInfo().length - 1; this.iUser++) {
      this.userList.push(this.users.userInfo()[this.iUser].username);
    }
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
        this.router.navigate([this.username, 'profile']);
        break;
      }
    }
  }
  clDash(){
    this.router.navigate([this.username, 'dashboard'])
  }
}
