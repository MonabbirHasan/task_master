CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    profile_image VARCHAR(255),
    user_rating DECIMAL(3,2) DEFAULT 0.0,
    user_reviews_count INT DEFAULT 0,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    duration VARCHAR(255),
    availability VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Active',
    location VARCHAR(255) DEFAULT 'Remote',
    task_type VARCHAR(50) DEFAULT 'Fixed Price',
    verified_badge BOOLEAN DEFAULT FALSE,
    user_id INT REFERENCES users(user_id), -- foreign key to users table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE task_skills (
    task_id INT REFERENCES tasks(task_id),
    skill_name VARCHAR(255),
    PRIMARY KEY (task_id, skill_name)
);
CREATE TABLE task_tags (
    task_id INT REFERENCES tasks(task_id),
    tag_name VARCHAR(255),
    PRIMARY KEY (task_id, tag_name)
);
CREATE TABLE task_images (
    task_id INT REFERENCES tasks(task_id),
    image_url VARCHAR(255),
    PRIMARY KEY (task_id, image_url)
);
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(task_id),
    user_id INT REFERENCES users(user_id), -- reviewer ID
    rating DECIMAL(3,2),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE task_applicants (
    applicant_id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(task_id),
    user_id INT REFERENCES users(user_id),
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Pending' -- Status like 'Pending', 'Hired', 'Rejected'
);
CREATE TABLE task_budget (
    task_id INT REFERENCES tasks(task_id),
    min_budget DECIMAL(10,2),
    max_budget DECIMAL(10,2),
    PRIMARY KEY (task_id)
);
CREATE TABLE social_proof (
    user_id INT REFERENCES users(user_id),
    proof_type VARCHAR(255),  -- e.g., "Logo Designs Completed"
    proof_count INT,
    PRIMARY KEY (user_id, proof_type)
);
CREATE TABLE task_views (
    task_id INT REFERENCES tasks(task_id),
    views_count INT DEFAULT 0,
    PRIMARY KEY (task_id)
);
SELECT 
    t.task_id,
    t.title,
    t.description,
    t.category,
    t.price,
    t.duration,
    t.status,
    t.location,
    t.task_type,
    t.verified_badge,
    u.name AS freelancer_name,
    u.username AS freelancer_username,
    u.profile_image AS freelancer_profile_image,
    u.user_rating AS freelancer_rating,
    u.user_reviews_count AS freelancer_reviews_count
FROM tasks t
JOIN users u ON t.user_id = u.user_id
WHERE t.task_id = 12345;



SELECT skill_name
FROM task_skills
WHERE task_id = 12345;

SELECT tag_name
FROM task_tags
WHERE task_id = 12345;


SELECT r.rating, r.review_text, u.name AS reviewer_name
FROM reviews r
JOIN users u ON r.user_id = u.user_id
WHERE r.task_id = 12345;



SELECT a.status, u.name AS applicant_name
FROM task_applicants a
JOIN users u ON a.user_id = u.user_id
WHERE a.task_id = 12345;
