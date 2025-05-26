import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = '';
  taskList: { id: number; task: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = '';
  }

  onDelete(id: number) {
    this.taskList = this.taskList.filter((task) => {
      return task.id !== id;
    });
  }
}
