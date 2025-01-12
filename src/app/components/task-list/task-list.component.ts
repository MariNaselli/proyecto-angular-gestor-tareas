import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [
    { id: 1, title: 'Aprender Angular', category: 'Educación', deadline: '2025-01-20' },
    { id: 2, title: 'Hacer ejercicio', category: 'Salud', deadline: '2025-01-15' },
    { id: 3, title: 'Comprar regalos', category: '', deadline: '' }
  ];

  constructor() {}

  ngOnInit(): void {}

  editTask(task: any): void {
    console.log('Editando tarea:', task);
  }

  deleteTask(taskId: number): void {
    console.log('Eliminando tarea con ID:', taskId);
  }
}
