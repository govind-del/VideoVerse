CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    video_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    language VARCHAR(20),
    city_name VARCHAR(100),
    likes INT DEFAULT 0,
    dislikes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE downloads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    video_id INT,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
ADD COLUMN city_name VARCHAR(100),
ADD COLUMN is_premium BOOLEAN DEFAULT FALSE;