import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
color = 'red';
}
