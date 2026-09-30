import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Super, User } from './super';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App implements OnInit {
  userData = signal<User[]>([]);
  protected readonly title = signal('entretien');

  private readonly userService = inject(Super);
  

  ngOnInit() {
    this.userData.set(this.userService.getUserData());
  }

}
