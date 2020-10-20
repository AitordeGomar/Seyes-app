import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
textarea:number;
buttonClicked: boolean = false;
username:string;
visitedUser:string;
  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
    this.visitedUser = this.actRoute.snapshot.params['visitedUser'];
  }

  sendMessage() {
    this.textarea = document.getElementsByTagName('textarea')[0].value.length;
    // alert('Your question has been sent');
    if (this.textarea == 0) {
      alert('You did not write anything');
    } else {
      this.buttonClicked = true;
      setTimeout(() => {
        this.buttonClicked = false;
        this.router.navigate([this.username, 'dashboard']);
      }, 3000);
    }
 }

}
