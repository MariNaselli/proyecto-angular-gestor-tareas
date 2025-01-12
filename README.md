# Proyecto Gestor de Tareas

## Descripción
El "Gestor de Tareas" es una aplicación web desarrollada con Angular que permite a los usuarios gestionar sus tareas diarias. Los usuarios pueden:

- Crear nuevas tareas.
- Editar tareas existentes.
- Marcar tareas como completadas.
- Eliminar tareas.
- Asignar fechas límite y categorías opcionales a las tareas.

## Tecnologías Utilizadas
- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Bootstrap**: Para el diseño responsive y estilos.
- **RxJS**: Para manejo reactivo de datos.

## Características Principales
- Listado de tareas con opción de marcar como completadas o eliminarlas.
- Formulario para crear y editar tareas.
- Navegación entre vistas usando Angular Router.
- Datos gestionados mediante un servicio centralizado (TaskService).

## Estructura del Proyecto
El proyecto se organiza de la siguiente manera:

```
src/
|-- app/
    |-- components/
        |-- navbar/            # Barra de navegación
        |-- footer/            # Pie de página
        |-- task-list/         # Listado de tareas
        |-- task-form/         # Formulario de tareas
    |-- services/
        |-- task.service.ts    # Servicio para la gestión de tareas
    |-- app-routing.module.ts  # Configuración de rutas
    |-- app.module.ts          # Módulo principal
```

## Instalación y Configuración
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-angular-gestor-tareas.git
   cd proyecto-angular-gestor-tareas
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
   La aplicación estará disponible en `http://localhost:4200/`.

## Uso
- **Inicio**: Muestra la lista de tareas existentes.
- **Crear Tarea**: Navega a `/task/new` para crear una nueva tarea.
- **Editar Tarea**: Selecciona una tarea para editarla en `/task/:id/edit`.

## Plan de Desarrollo
1. **Fase Inicial:**
   - Configuración del entorno.
   - Creación de componentes Navbar, Footer, TaskList y TaskForm.
   - Implementación del servicio TaskService.
   - Configuración de rutas.

2. **Fase Intermedia:**
   - Diseño del modelo Task.
   - Implementación de funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar).

3. **Fase Avanzada:**
   - Integración con backend (futuro).
   - Mejoras de UX/UI.

## Contribuciones
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y realiza un commit: `git commit -m 'Agrega nueva funcionalidad'`.
4. Sube los cambios a tu repositorio: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

