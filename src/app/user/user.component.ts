import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyConverterPipe } from "../currency-converter.pipe";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CurrencyConverterPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 constructor() {
  console.log("constructor");
  console.log('Hello World');
  
 }
}
