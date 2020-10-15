import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  constructor() {}

  userInfo() {
    return [
      { username: 'aitor' },
    ];
  }
}
