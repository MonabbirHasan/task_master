import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  Chip,
} from "@mui/material";
import { Button, SelectChangeEvent } from "@mui/material";
import "./post_service_page.css";
const PostServicePage = () => {
  const [category, setCategory] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [availability, setAvailability] = useState("");
  const [warranty, setWarranty] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File | null>(null);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImages(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    alert("Listing Submitted!");
  };
  return (
    <div className="post_service_page">
      <Container>
        <div className="post_service_page_wrapper">
          <Card>
            <Card.Body>
              <h3>Add Details</h3>
              <Form onSubmit={handleSubmit}>
                {/* Category Selection */}
                <Form.Group controlId="formCategory">
                  <FormControl fullWidth>
                    <Form.Label>Category</Form.Label>
                    <Select
                      value={category}
                      onChange={handleCategoryChange}
                      size="small"
                    >
                      <MenuItem value="babysitting">Babysitting</MenuItem>
                      <MenuItem value="beautycare">Beauty Care</MenuItem>
                      <MenuItem value="cleaning">Cleaning</MenuItem>
                      <MenuItem value="gardening">Gardening</MenuItem>
                    </Select>
                  </FormControl>
                </Form.Group>

                {/* Image Upload */}
                <Form.Group controlId="formImages">
                  <Form.Label column sm={2}>
                    Images (Optional)
                  </Form.Label>

                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <div className="mt-2">
                    {images ? <p>{images.name}</p> : <p>No file chosen</p>}
                  </div>
                </Form.Group>

                {/* Title */}
                <Form.Group controlId="formTitle">
                  <Form.Label column sm={2}>
                    Title
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    required
                  />
                </Form.Group>

                {/* Hourly Rate */}
                <Form.Group controlId="formHourlyRate">
                  <Form.Label column sm={2}>
                    Hourly Rate
                  </Form.Label>

                  <Form.Control
                    type="number"
                    placeholder="Enter Hourly Rate"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Availability */}
                <Form.Group controlId="formAvailability">
                  <Form.Label column sm={2}>
                    Availability
                  </Form.Label>

                  <Form.Control
                    as="select"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    required
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="weekends">Weekends</option>
                  </Form.Control>
                </Form.Group>

                {/* Warranty */}
                <Form.Group controlId="formWarranty">
                  <Form.Label column sm={2}>
                    Warranty
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter Warranty Details"
                    value={warranty}
                    onChange={(e) => setWarranty(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Tags (Optional) */}
                <Form.Group controlId="formTags">
                  <Form.Label column sm={2}>
                    Tags (Optional)
                  </Form.Label>

                  <TextField
                    label="Enter Tags"
                    variant="outlined"
                    fullWidth
                    onChange={handleTagsChange}
                    value=""
                  />
                  <div className="mt-2">
                    {tags.length > 0 &&
                      tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          onDelete={() =>
                            setTags(tags.filter((t) => t !== tag))
                          }
                          style={{ margin: "0.2rem" }}
                        />
                      ))}
                  </div>
                </Form.Group>

                {/* Description */}
                <Form.Group controlId="formDescription">
                  <Form.Label column sm={2}>
                    Description
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Form.Group style={{ marginTop: 10 }}>
                  <Button variant="contained" fullWidth>
                    Submit Listing
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PostServicePage;
