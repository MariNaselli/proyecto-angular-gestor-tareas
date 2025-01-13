import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TASKS_MOCK } from '../../task-mock';
import { Task } from '../../task.model';
import { FormsModule, NgModel } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [CommonModule, FormsModule ],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @ViewChild('addTaskModal') addTaskModal!: ElementRef;
  tasks = TASKS_MOCK;
  newTask: Task = { id: 0, title: '', description: '', completed: false, category: '', date: new Date };

  constructor() {}

  ngOnInit(): void {}
  
  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.newTask.id = this.tasks.length + 1;
      this.tasks.push(this.newTask);
      this.newTask = { id: 0, title: '', description: '', completed: false, category: '', date: undefined };

      // Cierra el modal
      const modalInstance = new Modal(this.addTaskModal.nativeElement);
      modalInstance.hide();
    }
  }
  

  editTask(task: any): void {
    console.log('Editando tarea:', task);
  }

  deleteTask(taskId: number): void {
    console.log('Eliminando tarea con ID:', taskId);
  }
}
