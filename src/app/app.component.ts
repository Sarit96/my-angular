import { Component } from '@angular/core';
import {} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from './currency-converter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserComponent]
})
export class AppComponent {
  amount: number = 10;
}
