import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(){
    return [
      {id:0, question: 'Do you like sports?'},
      {id:1, question: 'Do you like coding?'},
      {id:2, question: 'Do you like reading?'}
    ]
  }
}
