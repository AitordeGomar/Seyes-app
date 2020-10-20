import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
username:string;
idUser:number;
userList = [];
i=0;
btnVisitProfile:boolean = false;
  public visitedUser:string;

  constructor(private router:Router, private actRoute: ActivatedRoute, private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.userList = this.users.userInfo();
    for(this.i;this.i<=this.userList.length -1;this.i++){
      if(this.userList[this.i].username != this.username){
        continue;
      }else{
        this.idUser = this.userList[this.i].id -1;
      }
    }
  }

  clDash(){
    this.router.navigate([this.username, 'dashboard'])
  }

  duplicate (u) {
    return this.userList[this.idUser].likes.concat(u).filter((c, index) => {
      return this.userList[this.idUser].likes.concat(u).indexOf(c) === index;
    }).length;
  }
  goProfile(e){
    this.visitedUser = e.target.innerText;
    console.log(this.visitedUser);
    this.btnVisitProfile = true;
  }
}
