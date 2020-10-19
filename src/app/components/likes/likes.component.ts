import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../../services/userlist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  username:string;
  idUser:number;
  userList = [];
  i=0;
  constructor(private users: UserlistService,private router:Router, private actRoute: ActivatedRoute) { }

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
}
