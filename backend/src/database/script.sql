-- Creación de la tabla 'tasks'
CREATE TABLE tasks (
    -- Campo 'id': identificador único para cada tarea, autoincremental.
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- Campo 'title': título de la tarea, requerido y con un máximo de 255 caracteres.
    title VARCHAR(255) NOT NULL,
    -- Campo 'description': descripción detallada de la tarea, opcional.
    description TEXT,
    -- Campo 'limit_date': fecha límite para completar la tarea, opcional.
    limit_date DATE,
    -- Campo 'active': estado de actividad de la tarea, 1 por defecto (activo).
    active TINYINT(1) DEFAULT 1,
    -- Campo 'done': estado de finalización de la tarea, 0 por defecto (no completada).
    done TINYINT(1) DEFAULT 0,
    -- Campo 'created_at': marca de tiempo de creación de la tarea, se establece automáticamente al insertar.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);