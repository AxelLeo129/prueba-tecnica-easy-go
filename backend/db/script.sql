CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    limit_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);