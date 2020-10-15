import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {
buttonClicked:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  questionSent(){
    // alert('Your question has been sent');
    this.buttonClicked = true;
    setTimeout(
      ()=>{
        this.buttonClicked = false;
        this.router.navigate(['dashboard']);
      }
      ,3000)
  }
}
