import { Component } from '@angular/core';
import {
} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  title:string = "code Step by Step"
  date = new Date
  amount:number=10
inr: string|undefined;
 }

