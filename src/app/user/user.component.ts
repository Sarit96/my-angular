import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() getUsers = new EventEmitter<string[]>();
  users: string[] = ['Bubun', 'Swapna', 'Sarit', 'Mallick', 'Riyan']

  ngOnInit() {
    this.getUsers.emit(this.users);
  }
}
