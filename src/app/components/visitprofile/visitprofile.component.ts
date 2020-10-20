import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-visitprofile',
  templateUrl: './visitprofile.component.html',
  styleUrls: ['./visitprofile.component.css']
})
export class VisitprofileComponent implements OnInit {
  @Input() public username:string;
  @Input() public visitedUser:string;
  i=0;
  // username:string;
  userList=[];
  // visitedUser:string;
  idVisited:number;
  constructor(
 private actRoute: ActivatedRoute, private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['user'];
    this.userList = this.users.userInfo();
    for(this.i;this.i<=this.userList.length -1;this.i++){
      if(this.userList[this.i].username != this.visitedUser){
        continue;
      }else{
        this.idVisited = this.userList[this.i].id -1;
      }
    }
  }

}
