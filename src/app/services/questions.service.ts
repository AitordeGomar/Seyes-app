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
      {id:3, question:'Harry Potter'}
    ]
  }
}
