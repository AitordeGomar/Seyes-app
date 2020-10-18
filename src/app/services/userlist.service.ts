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
        friends: [],
        likes: [],
      },
      {
        id:2,
        username: 'aitor',
        password: 'aitor',
        email: '',
        friends: ['sylwina'],
        likes: [],
      },
      {
        id:3,
        username: 'sylwina',
        password: 'sylwina92',
        email: '',
        friends: ['aitor'],
        likes: [],
      },
    ];
  }
}
