CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    category_id INT REFERENCES categories(id),
    type ENUM('task', 'gig') NOT NULL, -- Differentiates tasks and gigs
    description TEXT,
    status ENUM('active', 'pending', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    listing_id INT REFERENCES listings(id) ON DELETE CASCADE, -- Connects to `listings`
    budget NUMERIC(10,2), -- No fixed price, users can bid
    deadline DATE,
    location VARCHAR(255),
    is_remote BOOLEAN DEFAULT FALSE
);
CREATE TABLE gigs (
    id SERIAL PRIMARY KEY,
    listing_id INT REFERENCES listings(id) ON DELETE CASCADE, -- Connects to `listings`
    price NUMERIC(10,2) NOT NULL,
    delivery_time INT, -- In days
    revisions INT DEFAULT 0,
    images TEXT[], -- Array of image URLs
    video_url TEXT
);
CREATE TABLE task_bids (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    bid_price NUMERIC(10,2) NOT NULL,
    message TEXT,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE gig_orders (
    id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(id) ON DELETE CASCADE,
    buyer_id INT REFERENCES users(id) ON DELETE CASCADE,
    seller_id INT REFERENCES users(id) ON DELETE CASCADE,
    amount NUMERIC(10,2) NOT NULL,
    status ENUM('pending', 'in_progress', 'completed', 'canceled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    delivery_date DATE
);
