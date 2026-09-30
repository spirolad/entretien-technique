import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService, User } from './userService';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App implements OnInit {
  userData = signal<User[]>([]);
  private readonly userService = inject(UserService);


  ngOnInit() {
    this.userData.set(this.userService.getUserData());
  }

}
