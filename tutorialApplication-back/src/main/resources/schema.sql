CREATE TABLE IF NOT EXISTS tutorials (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         title VARCHAR(255),
                                         description VARCHAR(255),
                                         is_published BOOLEAN
);