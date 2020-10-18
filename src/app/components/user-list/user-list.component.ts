import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  username: string;
  userList:{};
  buttons = document.getElementsByTagName('button');
  constructor(private router: Router,private actRoute: ActivatedRoute,private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.userList = this.users.userInfo();
  }
  clDash(){
    this.router.navigate([this.username,'dashboard']);
  }

  clAddFriend(e){
    console.log(this.buttons)
    alert(e.curentTarget);
  }
}
