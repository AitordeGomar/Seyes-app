import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(){
    return [
      {id:0, question: 'sports'},
      {id:1, question: 'coding'},
      {id:2, question: 'reading'},
      {id:3, question:'Harry Potter'},
      {id:4, question: 'listening to music'},
      {id:5, question: 'watching films'},
      {id:6, question: 'playing games'},
      {id:7, question:'Game of Thrones'},
    ]
  }
}
