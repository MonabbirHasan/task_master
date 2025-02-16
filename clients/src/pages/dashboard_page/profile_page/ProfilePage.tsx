import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Rating,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import {
  Edit,
  LocationOn,
  Message,
  Work,
  Star,
  Dashboard,
  PostAdd,
  Task,
} from "@mui/icons-material";
import {
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import "./profile_page.css";

const userProfile = {
  name: "John Doe",
  username: "john_doe",
  location: "New York, USA",
  bio: "Experienced web developer with a passion for creating amazing digital experiences.",
  rating: 4.8,
  completedTasks: 120,
  ongoingTasks: 5,
  reviews: 95,
  avatarUrl: "https://i.pravatar.cc/150?u=johndoe",
};

const ProfilePage = () => {
  return (
    <div className="profile_page">
      <Container>
        {/* Profile Header */}
       
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: 3,
            boxShadow: 3,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* User Avatar */}
          <Avatar
            src={userProfile.avatarUrl}
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              marginBottom: { xs: 2, sm: 0 },
              marginRight: { sm: 3 },
            }}
          />

          {/* User Info */}
          <Box flex={1}>
            <Typography variant="h5" fontWeight="bold">
              {userProfile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{userProfile.username}
            </Typography>
            <Box
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems="center"
              gap={1}
              color="text.secondary"
            >
              <LocationOn fontSize="small" />
              <Typography variant="body2">{userProfile.location}</Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {userProfile.bio}
            </Typography>

            {/* Ratings */}
            <Box
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems="center"
              gap={1}
              mt={1}
            >
              <Rating value={userProfile.rating} precision={0.1} readOnly />
              <Typography variant="body2">
                ({userProfile.reviews} Reviews)
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box
              mt={2}
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              gap={2}
            >
              <Button variant="contained" startIcon={<Edit />}>
                Edit Profile
              </Button>
              <Button variant="outlined" startIcon={<Message />}>
                Message
              </Button>
            </Box>
          </Box>
        </Card>

        {/* Task Statistics */}
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 2 }}>
              <Star color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6">{userProfile.rating}</Typography>
              <Typography variant="body2" color="text.secondary">
                Overall Rating
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 2 }}>
              <Work color="success" sx={{ fontSize: 40 }} />
              <Typography variant="h6">{userProfile.completedTasks}</Typography>
              <Typography variant="body2" color="text.secondary">
                Completed Tasks
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 2 }}>
              <Work color="warning" sx={{ fontSize: 40 }} />
              <Typography variant="h6">{userProfile.ongoingTasks}</Typography>
              <Typography variant="body2" color="text.secondary">
                Ongoing Tasks
              </Typography>
            </Card>
          </Grid>
        </Grid>
 
      </Container>
    </div>
  );
};

export default ProfilePage;
