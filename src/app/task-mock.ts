import { Task } from './task.model';

export const TASKS_MOCK: Task[] = [
  { id: 1, title: 'Aprender Angular', description: 'Estudiar conceptos clave de Angular.', completed: false, category: 'Educación', date: new Date('2025-01-20') },
  { id: 2, title: 'Hacer ejercicio', description: 'Realizar 30 minutos de ejercicio cardiovascular.', completed: true, category: 'Salud', date: new Date('2025-01-15') },
  { id: 3, title: 'Comprar regalos', description: 'Comprar regalos para la familia.', completed: false, category: '', date: undefined },
  { id: 4, title: 'Cocinar', description: 'Cocinar pastel de papas.', completed: false, category: '', date: undefined }
];
