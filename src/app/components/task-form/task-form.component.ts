import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<any>();

  task = {
    title: '',
    category: '',
    deadline: null,
  };

  onSubmit() {
    if (this.task.title) {
      this.addTask.emit(this.task);
      this.task = { title: '', category: '', deadline: null }; // Reset form
      const modalElement = document.getElementById('addTaskModal') as HTMLElement;
      // const modal = bootstrap.Modal.getInstance(modalElement); // Cierra el modal con Bootstrap
      // modal?.hide();
    }
  }
}
