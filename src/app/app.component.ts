import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = new FormControl();
  password = new FormControl();
  displayValue() {
    console.log('Name:', this.name.value);
    console.log(this.password.value)
  }
}
