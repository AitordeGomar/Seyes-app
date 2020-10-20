import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css'],
})
export class AddquestionsComponent implements OnInit {
  buttonClicked: boolean = false;
  username: string;
  // input = document.getElementsByTagName[0].value;
  input= undefined;
  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
  }

  questionSent() {
    // alert('Your question has been sent');
    if (this.input == undefined) {
      alert('You need to write a question');
    } else {
      this.buttonClicked = true;
      setTimeout(() => {
        this.buttonClicked = false;
        this.router.navigate([this.username, 'dashboard']);
      }, 3000);
    }
  }
  
}
