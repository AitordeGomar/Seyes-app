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
        friends: ['dummy','aitor', 'sylwina'],
        likes: ['sports'],
      },
      {
        id:2,
        username: 'aitor',
        password: 'aitor',
        email: '',
        friends: ['sylwina', 'guest'],
        likes: ['Harry Potter', 'coding','sports'],
      },
      {
        id:3,
        username: 'sylwina',
        password: 'sylwina92',
        email: '',
        friends: ['aitor','guest'],
        likes: ['Harry Potter', 'sports'],
      },
      {
        id:4,
        username: 'dummy',
        password: 'dummy',
        email: '',
        friends: ['guest'],
        likes: ['coding','sports'],
      },
      {
        id:5,
        username: 'John92',
        password: 'john92',
        email: '',
        friends: ['dummy','Arek'],
        likes: ['sports','coding'],
      },
      {
        id:6,
        username: 'Mary6',
        password: 'mary6',
        email: '',
        friends: ['sylwina'],
        likes: ['Harry Potter', 'coding','sports','reading'],
      },
      {
        id:7,
        username: 'Arek',
        password: 'arek',
        email: '',
        friends: ['Mary6','aitor'],
        likes: ['Harry Potter'],
      },
      {
        id:8,
        username: 'dummy2',
        password: 'dummy2',
        email: '',
        friends: ['guest','dummy2', 'sylwina'],
        likes: ['coding','Harry Potter'],
      },
    ];
  }
}
