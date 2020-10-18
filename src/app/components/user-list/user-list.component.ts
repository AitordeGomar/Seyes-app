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
  idUser:number;
  userList=[];
  buttons = document.getElementsByTagName('button');
  i=0;
  constructor(private router: Router,private actRoute: ActivatedRoute,private users: UserlistService) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.userList = this.users.userInfo();
    console.log(this.userList);
    for(this.i;this.i<=this.userList.length -1;this.i++){
      if(this.userList[this.i].username != this.username){
        continue;
      }else{
        this.idUser = this.userList[this.i].id -1;
      }}
      console.log(this.idUser);
  }
  clDash(){
    this.router.navigate([this.username,'dashboard']);
  }

  clAddFriend(e){
    e.target.style.background = 'green';
    e.target.innerText = 'Request sent';
    setTimeout(()=>{
      if(Math.random()<= 0.5){
        e.target.style.display = 'none';
      }else{
        e.target.innerText = 'Add friend';
        e.target.style.background ='';
      }
    },3000)
  }
}
