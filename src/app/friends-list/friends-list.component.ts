import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../services/userlist.service';

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
  constructor(private router:Router, private actRoute: ActivatedRoute, private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.userList = this.users.userInfo();
    console.log(this.userList[1]);
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

}
