import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  FormControl,
} from "@mui/material";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBanner from "../../components/home_banner/home-banner";
import { Col, Form, Row } from "react-bootstrap";
// const redis = require('redis');
// const redisClient = redis.createClient();
import {
  Work as WorkIcon,
  Home as HomeIcon,
  Build as BuildIcon,
  Weekend as WeekendIcon,
  DirectionsCar as DirectionsCarIcon,
  Devices as DevicesIcon,
  SportsSoccer as SportsSoccerIcon,
  ShoppingCart as ShoppingCartIcon,
  Restaurant as RestaurantIcon,
  Flight as FlightIcon,
  Pets as PetsIcon,
} from "@mui/icons-material";
// Styles
const styles = {
  container: { fontFamily: "Roboto, sans-serif" },
  revSlider: {
    // height: "50vh",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    // backgroundColor: "#333",
    // marginBottom:20
  },
  sliderTitle: {
    marginBottom: "1rem",
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  searchBar: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center", // Ensures elements are vertically aligned
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    width: "90%", // Slightly increased for better mobile responsiveness
    maxWidth: "650px", // Slightly increased to fit longer queries
    padding: "8px 12px", // Added padding for better spacing
    background: "rgba(255, 255, 255, 0.9)", // Light transparency for better aesthetics
    borderRadius: "12px", // Soft edges for a cleaner look
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for better depth
    backdropFilter: "blur(8px)", // Blurred background effect
  },
  searchField: {
    flex: 2,
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
      fontSize: "1rem", // Slightly larger text for readability
      padding: "10px", // Added padding for better typing experience
    },
  },
  searchButton: {
    flex: 0.5,
    backgroundColor: "#3498db",
    borderRadius: "30px",
    color: "#fff",
    fontWeight: "bold",
    padding: "12px 20px", // Better spacing inside the button
    textTransform: "none", // Prevents uppercase text
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: "#2980b9",
      transform: "scale(1.07)", // Slightly larger effect on hover
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Adds a soft glow effect
    },
  },
  locationIcon: {
    color: "#555", // Slightly softer color for a modern look
    fontSize: "1.5rem", // Enlarged for better visibility
  },
  sliderImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
  },
  ctaSection: { display: "flex", justifyContent: "center", marginTop: "20px" },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    backgroundColor: "#f0f0f0",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ActionContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    backgroundColor: "#ffc107",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ctaButton: {
    width: "250px",
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "25px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
  },
  ctaButtonPrimary: {
    background: "linear-gradient(90deg, #3498db, #8e44ad)",
    color: "#fff",
    padding: "12px 30px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #8e44ad, #3498db)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  ctaButtonSecondary: {
    background: "#fff",
    color: "#3498db",
    border: "2px solid #3498db",
  },
  ctaButtonHover: {
    "&:hover": {
      background: "linear-gradient(90deg, #8e44ad, #3498db)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  locationField: { flex: 1 },
  section: {
    padding: "3rem 2rem",
    backgroundColor: "#f7f7f7",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    color: "dodgerblue",
  },
  categoryCard: {
    textAlign: "center",
    padding: "1rem",
    borderRadius: "16px", // Increased for a modern, smooth look
    background: "linear-gradient(135deg, #f9f9f9, #ffffff)", // Light gradient for depth
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.12)", // Softer, elegant shadow
    transition:
      "transform 0.3s ease-in-out, box-shadow 0.3s ease, background 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px) scale(1.03)", // Subtle lift and scaling effect
      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.25)", // Enhanced floating effect
      background: "linear-gradient(135deg, #ffffff, #f1f1f1)", // Subtle light effect on hover
    },
    margin: 8, // Slightly increased for better spacing
    cursor: "pointer",
  },

  iconCard: { textAlign: "center", padding: "1rem" },
  iconCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  categoryIcon: { fontSize: "2rem", marginBottom: "0.5rem" },
  carouselContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  arrowButton: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
  },
  viewAllButton: {
    position: "absolute",
    right: "10px",
    bottom: "50px",
  },
  // listingCard: {
  //   padding: '10px',
  //   backgroundColor: '#f9f9f9',
  // },
  listingCard: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.12)", // Softer, more prominent shadow
    borderRadius: "16px", // Increased for a more modern look
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)", // Slight scale effect for better focus
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)", // Deeper shadow for a popping effect
    },
    height: 140,
  },
  footer: {
    textAlign: "center",
    padding: "2rem 1rem",
    backgroundColor: "#343a40",
    color: "#fff",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  footerText: { fontSize: "0.875rem" },
  actionButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    padding: "2rem",
  },
  actionButton: {
    width: "200px",
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  postButton: {
    background: "#2ecc71",
    color: "#fff",
    "&:hover": {
      background: "#27ae60",
    },
  },
  offerButton: {
    background: "#f39c12",
    color: "#fff",
    "&:hover": {
      background: "#e67e22",
    },
  },
  contactButton: {
    background: "#e74c3c",
    color: "#fff",
    "&:hover": {
      background: "#c0392b",
    },
  },
};

const HomePage = () => {
  // Data for the images in the slider
  const sliderImages = useMemo(
    () => [
      "https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682784.jpg",
      "https://img.freepik.com/free-photo/beautiful-chameleon-wild_23-2151731176.jpg",
      "https://img.freepik.com/free-photo/beautiful-chameleon-wild_23-2151731176.jpg",
      "https://img.freepik.com/free-photo/beautiful-chameleon-wild_23-2151731176.jpg",
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleScrollFeaturedRight = () => {
    if (carouselRef.current) {
      // carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items visible
    slidesToScroll: 1, // Number of items to scroll
    arrows: true,
    nextArrow: (
      <button style={{ ...styles.arrowButton, right: "-25px" }}>→</button>
    ),
    prevArrow: (
      <button style={{ ...styles.arrowButton, left: "-25px" }}>←</button>
    ),
    responsive: [
      {
        breakpoint: 960, // Adjust slides for tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // Adjust slides for mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const popularCategories = useMemo(
    () => ["Electronics", "Fashion", "Automobiles"],
    []
  );
  const categoriesWithIcons = useMemo(
    () => [
      { name: "Real Estate", icon: <HomeIcon style={styles.categoryIcon} /> },
      { name: "Jobs", icon: <WorkIcon style={styles.categoryIcon} /> },
      { name: "Services", icon: <BuildIcon style={styles.categoryIcon} /> },
      { name: "Furniture", icon: <WeekendIcon style={styles.categoryIcon} /> },
      {
        name: "Vehicles",
        icon: <DirectionsCarIcon style={styles.categoryIcon} />,
      },
      {
        name: "Electronics",
        icon: <DevicesIcon style={styles.categoryIcon} />,
      },
      {
        name: "Sports",
        icon: <SportsSoccerIcon style={styles.categoryIcon} />,
      },
      {
        name: "Shopping",
        icon: <ShoppingCartIcon style={styles.categoryIcon} />,
      },
      {
        name: "Food & Dining",
        icon: <RestaurantIcon style={styles.categoryIcon} />,
      },
      { name: "Travel", icon: <FlightIcon style={styles.categoryIcon} /> },
      {
        name: "Pets & Animals",
        icon: <PetsIcon style={styles.categoryIcon} />,
      },
    ],
    []
  );

  const featuredListings = useMemo(
    () => [
      {
        title: "iPhone 13 Pro",
        description:
          "A powerful smartphone with a ProMotion display and advanced cameras.",
      },
      {
        title: "Tesla Model 3",
        description:
          "An all-electric sedan with cutting-edge technology and impressive range.",
      },
      {
        title: "Luxury Apartment",
        description:
          "A high-end apartment with modern amenities and stunning views.",
      },
      {
        title: "MacBook Pro",
        description:
          "A professional-grade laptop with an M-series chip for exceptional performance.",
      },
      {
        title: "Rolex Submariner",
        description:
          "A timeless luxury watch with exceptional craftsmanship and precision.",
      },
      {
        title: "Sony PlayStation 5",
        description:
          "A next-gen gaming console with ultra-fast SSD and immersive graphics.",
      },
      {
        title: "Samsung Galaxy S22 Ultra",
        description:
          "A flagship Android smartphone with an advanced camera system and S Pen support.",
      },
      {
        title: "Lamborghini Huracán",
        description:
          "A high-performance sports car with a powerful V10 engine and striking design.",
      },
      {
        title: "Bose QuietComfort 45",
        description:
          "Industry-leading noise-canceling headphones with premium sound quality.",
      },
      {
        title: "DJI Mavic Air 2",
        description:
          "A compact drone with 4K camera and intelligent flight features.",
      },
      {
        title: "Gucci Leather Handbag",
        description:
          "A luxury handbag crafted from premium leather with an elegant design.",
      },
      {
        title: "Apple Watch Ultra",
        description:
          "A rugged smartwatch with GPS, fitness tracking, and long battery life.",
      },
    ],
    []
  );

  // const redis = require('redis');
  // const redisClient = redis.createClient();

  // const getPopularCategories = async (req, res) => {
  //   redisClient.get('popular_categories', async (err, data) => {
  //     if (data) {
  //       return res.status(200).json(JSON.parse(data));
  //     }

  //     try {
  //       const popularCategories = await Category.findAll({
  //         attributes: ['category_id', 'name', 'task_count'],
  //         order: [['task_count', 'DESC']],
  //         limit: 10,
  //       });

  //       redisClient.setex('popular_categories', 3600, JSON.stringify(popularCategories));
  //       res.status(200).json({
  //         message: 'Popular categories retrieved successfully',
  //         popularCategories,
  //       });
  //     } catch (error) {
  //       res.status(500).json({ message: 'Error fetching popular categories', error });
  //     }
  //   });
  // };

  // const categories = await Category.findAll({
  //   include: {
  //     model: Subcategory,
  //     as: 'subcategories',
  //     attributes: ['name', 'description'], // Fetch only required fields
  //   },
  //   attributes: ['name', 'description'], // Exclude unnecessary fields
  //   order: [['name', 'ASC']], // Sort by name
  // });

  // const getCategories = async (req, res) => {
  //   redisClient.get('categories', async (err, categories) => {
  //     if (categories) {
  //       return res.status(200).json(JSON.parse(categories));
  //     }

  //     const fetchedCategories = await Category.findAll({
  //       include: { model: Subcategory, as: 'subcategories' },
  //     });

  //     redisClient.setex('categories', 3600, JSON.stringify(fetchedCategories)); // Cache for 1 hour
  //     res.status(200).json(fetchedCategories);
  //   });
  // };

  return (
    <div style={styles.container}>
      {/* Header Component */}
      <Header />

      {/* Rev Slider */}
      <section style={styles.revSlider}>
        <Typography variant="h5" style={styles.sliderTitle}>
          Discover Great De als
        </Typography>
        <Box style={styles.searchBar}>
          <TextField
            placeholder="Enter location"
            variant="outlined" // More modern and sleek look
            fullWidth
            size="medium"
            style={styles.searchField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon style={styles.locationIcon} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            style={styles.searchButton}
            aria-label="Search"
          >
            Search
          </Button>
        </Box>

        <HomeBanner />
      </section>

      {/* Popular Categories Section */}
      <section style={styles.section}>
        <Typography variant="h4" style={styles.sectionTitle}>
          Popular Categories
        </Typography>
        <Slider {...settings}>
          {categoriesWithIcons.map((category, index) => (
            <div key={index}>
              <Card style={styles.categoryCard}>
                <CardContent>
                  {category.icon}
                  <Typography variant="h6">{category.name}</Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </section>

      {/* Featured Listings Section */}
      <section style={styles.section}>
        <Typography variant="h4" style={styles.sectionTitle}>
          Featured Tasks
        </Typography>
        <div style={styles.carouselContainer}>
          <Grid container spacing={3}>
            {featuredListings.map((listing, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card style={styles.listingCard}>
                  <CardContent>
                    <Typography variant="h6">{listing.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {listing.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* <IconButton
            onClick={handleScrollFeaturedRight}
            style={styles.arrowButton}
            aria-label="Scroll right"
          >
            <ArrowForwardIcon />
          </IconButton>
          <Button variant="contained" style={styles.viewAllButton}>
            View All
          </Button> */}
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section style={styles.actionButtons}>
        <Button
          variant="contained"
          style={{ ...styles.ctaButton, ...styles.postButton }}
          aria-label="Post a task"
        >
          Post a Task
        </Button>
        <Button
          variant="contained"
          style={{ ...styles.ctaButton, ...styles.offerButton }}
          aria-label="Get an Offer"
        >
          Get an Offer
        </Button>
        <Button
          variant="contained"
          style={{ ...styles.ctaButton, ...styles.contactButton }}
          aria-label="Contact Us"
        >
          Contact Us
        </Button>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
