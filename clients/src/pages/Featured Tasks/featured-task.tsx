import React, { useState, ChangeEvent } from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./featured-task.css";

interface Task {
  id: number;
  title: string;
  category: string;
  hourlyRate: number;
  availability: string;
  warranty: string;
  rating: number;
  reviews: number;
}

interface Filters {
  category: string;
  hourlyRate: [number, number];
  availability?: string;
  warranty?: string;
  fixedPrice?: string;
  location?: string;
}

const FeaturedTask: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    category: "All Categories",
    hourlyRate: [0, 100],
  });

  const tasks: Task[] = [
    {
      id: 1,
      title: "Professional quick home repairs",
      category: "Handyman",
      hourlyRate: 34,
      availability: "Same Day",
      warranty: "Limited Warranty",
      rating: 4.0,
      reviews: 12,
    },
    {
      id: 2,
      title: "Creative garden and landscape design",
      category: "Gardening",
      hourlyRate: 22,
      availability: "1-Day Notice",
      warranty: "Limited Warranty",
      rating: 3.5,
      reviews: 8,
    },
    {
      id: 3,
      title: "Quick garage cleanout service",
      category: "Cleaning",
      hourlyRate: 37,
      availability: "1-Day Notice",
      warranty: "Full Warranty",
      rating: 4.0,
      reviews: 15,
    },
    {
      id: 4,
      title: "Floral design and arrangements",
      category: "Gardening",
      hourlyRate: 23,
      availability: "Same Day",
      warranty: "Full Warranty",
      rating: 4.0,
      reviews: 10,
    },
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.category === "All Categories" || task.category === filters.category) &&
      task.hourlyRate >= filters.hourlyRate[0] &&
      task.hourlyRate <= filters.hourlyRate[1]
    );
  });

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />
      <div className="task-list-page">
        <h1 className="page-title">Featured Tasks</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="content">
          <div className="filters">
            <h3>Filters</h3>
            {/* Category Dropdown */}
            <div className="filter-group">
              <label>Category</label>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option>All Categories</option>
                <option>Handyman</option>
                <option>Gardening</option>
                <option>Cleaning</option>
              </select>
            </div>

            {/* Hourly Rate */}
            <div className="filter-group">
              <label>Hourly Rate</label>
              <input
                type="range"
                min="0"
                max="100"
                value={filters.hourlyRate[1]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    hourlyRate: [0, parseInt(e.target.value)],
                  })
                }
              />
              <span>${filters.hourlyRate[0]} - ${filters.hourlyRate[1]}</span>
            </div>

            {/* Fixed Price Dropdown */}
            <div className="filter-group">
              <label>Fixed Price</label>
              <select
                value={filters.fixedPrice}
                onChange={(e) =>
                  setFilters({ ...filters, fixedPrice: e.target.value })
                }
              >
                <option value="">Select Price Range</option>
                <option value="0-250">0 - 250</option>
                <option value="250-500">250 - 500</option>
                <option value="500-1000">500 - 1000</option>
                <option value="1000-2000">1000 - 2000</option>
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="filter-group">
              <label>Location</label>
              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <option value="">Select Location</option>
                <option value="Remote">Remote</option>
                <option value="Physical">Physical</option>
              </select>
            </div>

            {/* Apply Button */}
            <div className="filter-group">
              <button className="apply-button" onClick={() => {}}>
                Apply
              </button>
            </div>
          </div>

          <div className="task-cards">
            {filteredTasks.map((task) => (
              <div className="card" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.category}</p>
                <p>${task.hourlyRate}/hr</p>
                <p>{task.availability}</p>
                <p>{task.warranty}</p>
                <p>
                  {task.rating} ⭐ ({task.reviews} reviews)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default FeaturedTask;
