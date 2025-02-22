CREATE TABLE gigs (
    gig_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,  -- Price in the base currency
    delivery_time INT NOT NULL,  -- Delivery time in days
    rating DECIMAL(3, 2) DEFAULT 0,  -- Average rating of the gig
    reviews_count INT DEFAULT 0,  -- Number of reviews for the gig
    gig_image_url VARCHAR(255),  -- URL of the main gig image
    seller_id INT REFERENCES users(user_id) ON DELETE CASCADE,  -- Seller reference (foreign key to users table)
    gig_type VARCHAR(255),  -- e.g., "Basic", "Standard", "Premium"
    availability BOOLEAN DEFAULT TRUE,  -- If the gig is available or not
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_extras (
    extra_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    name VARCHAR(255) NOT NULL,  -- Name of the extra (e.g., "Extra Fast Delivery")
    price DECIMAL(10, 2) NOT NULL,  -- Additional price for the extra
    description TEXT,  -- Optional description of the extra service
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_tags (
    tag_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    tag VARCHAR(255) NOT NULL,  -- Tag name (e.g., "Logo Design", "Photoshop", etc.)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_reviews (
    review_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    user_id INT REFERENCES users(user_id),  -- The user who left the review (buyer)
    rating DECIMAL(3, 2) NOT NULL,  -- Rating given by the buyer
    review_text TEXT,  -- Review comment
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_orders (
    order_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    buyer_id INT REFERENCES users(user_id),  -- The user who placed the order (buyer)
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Date the order was placed
    status VARCHAR(50) DEFAULT 'Pending',  -- Order status (e.g., 'Pending', 'In Progress', 'Completed')
    delivery_date TIMESTAMP,  -- Date the gig was delivered
    total_price DECIMAL(10, 2) NOT NULL,  -- Total price of the gig, including extras
    extras JSONB,  -- JSON field to store selected extras (e.g., Extra Fast Delivery, Add Source Files)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_images (
    image_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    image_url VARCHAR(255) NOT NULL,  -- URL to the image
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE gig_availability (
    availability_id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(gig_id) ON DELETE CASCADE,  -- Link to the gig
    start_date TIMESTAMP,  -- Start date for availability
    end_date TIMESTAMP,  -- End date for availability
    available BOOLEAN DEFAULT TRUE,  -- Whether the gig is available during this period
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
