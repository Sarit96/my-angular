import { Component } from '@angular/core';
import {
} from '@angular/forms';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {
  users: string[] = ['Bubun', 'Swapna', 'Sarit', 'Mallick', 'Riyan']
}
