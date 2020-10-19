import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  constructor() {}

  userInfo() {
    return [
      {
        id:1,
        username: 'guest',
        password: 'guest',
        email: '',
        friends: ['dummy'],
        likes: [],
      },
      {
        id:2,
        username: 'aitor',
        password: 'aitor',
        email: '',
        friends: ['sylwina'],
        likes: ['Harry Potter', 'coding','sports'],
      },
      {
        id:3,
        username: 'sylwina',
        password: 'sylwina92',
        email: '',
        friends: ['aitor'],
        likes: ['Harry Potter', 'sports'],
      },
      {
        id:4,
        username: 'dummy',
        password: 'dummy',
        email: '',
        friends: ['guest'],
        likes: ['Harry Potter'],
      },
    ];
  }
}
