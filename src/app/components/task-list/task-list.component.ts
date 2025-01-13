import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TASKS_MOCK } from '../../task-mock';
import { Task } from '../../task.model';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../../services/task.service';
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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
  
  addTask(): void {
    if (this.newTask.title && this.newTask.description) {
      // Agregar la tarea al array
      this.newTask.id = this.tasks.length + 1;
      this.tasks = [...this.tasks, this.newTask]; // Usa spread operator para forzar la detección de cambios
      this.newTask = { id: 0, title: '', description: '', completed: false, category: '', date: undefined };
  
      // Cierra el modal
      this.closeModal();
    }
  }
  
  closeModal(): void {
    const modalElement = document.getElementById('addTaskModal');
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
      modalInstance.hide(); // Oculta el modal correctamente
    }
  }
  
  
  

  editTask(task: any): void {
    console.log('Editando tarea:', task);
  }

  deleteTask(taskId: number): void {
    console.log('Eliminando tarea con ID:', taskId);
  }

}