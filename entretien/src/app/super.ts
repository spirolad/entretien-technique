import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class Super {
  
  private userData = [
    { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' }
  ]

  getUserData(): User[] {
    return this.userData;
  }

}
