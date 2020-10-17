import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
username:string;
  constructor(private router:Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.actRoute.snapshot.params['username'];
  }

  clDash(){
    this.router.navigate([this.username, 'dashboard']);
  }

}
