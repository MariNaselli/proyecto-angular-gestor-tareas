export interface Task {
    id: number; // Identificador único para la tarea
    title: string; // Título de la tarea
    description: string; // Descripción breve de la tarea
    completed: boolean; // Estado de la tarea (completada o no)
    category?: string; // Categoría de la tarea (opcional)
    dueDate?: Date; // Fecha límite para completar la tarea (opcional)
  }
  