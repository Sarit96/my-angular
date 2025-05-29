import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 28,
    },
    {
      id: 4,
      name: 'Bob Brown',
      age: 35,
    },
    {
      id: 5,
      name: 'Charlie White',
      age: 22,
    },
  ];

  trackById(index: number, user: any) {
    return user.id;
  }
}
