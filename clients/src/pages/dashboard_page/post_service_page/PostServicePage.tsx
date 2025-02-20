import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import {} from "@mui/material";
import "./post_service_page.css";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
interface FormErrors {
  title?: string;
  category?: string;
  subcategory?: string;
  keywords?: string;
  description?: string;
  gigPrice?: string;
  hourlyRate?: string;
  deliveryTime?: string;
  availability?: string;
  language?: string;
  gigRequirements?: string;
  experienceLevel?: string;
  videoIntroductionUrl?: string;
  portfolioUrl?: string;
  refundPolicy?: string;
  termsCondition?: string;
}
const PostServicePage = () => {
  const [InitialStep, setInitialStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  // Step 1: Basic Information
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Step 2: Pricing & Availability
  const [gigPrice, setGigPrice] = useState<number | "">("");
  const [hourlyRate, setHourlyRate] = useState<number | "">("");
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");

  // Step 3: Additional Details
  const [language, setLanguage] = useState<string>("");
  const [gigRequirements, setGigRequirements] = useState<string>("");
  const [experienceLevel, setExperienceLevel] = useState<string>("");

  // Step 4: Media & Attachments
  const [attachments, setAttachments] = useState<File | null>(null);
  const [videoIntroductionUrl, setVideoIntroductionUrl] = useState<string>("");
  const [portfolioUrl, setPortfolioUrl] = useState<string>("");

  // Step 5: Policies & Submission
  const [refundPolicy, setRefundPolicy] = useState<string>("");
  const [termsCondition, setTermsCondition] = useState<string>("");
  // State for Error Messages

  // Validation Function
  const validateStep = () => {
    let newErrors: Record<string, string> = {};

    if (InitialStep === 0) {
      if (!title.trim()) newErrors.title = "Title is required";
      if (!category.trim()) newErrors.category = "Category is required";
      if (!subcategory.trim())
        newErrors.subcategory = "Subcategory is required";
      if (!keywords.trim()) newErrors.keywords = "Keywords are required";
      if (!description.trim())
        newErrors.description = "Description is required";
    }

    if (InitialStep === 1) {
      if (!gigPrice) newErrors.gigPrice = "Price is required";
      if (!hourlyRate) newErrors.hourlyRate = "Hourly rate is required";
      if (!deliveryTime.trim())
        newErrors.deliveryTime = "Delivery time is required";
    }

    if (InitialStep === 2) {
      if (!gigRequirements.trim())
        newErrors.gigRequirements = "Gig requirements are required";
      if (!videoIntroductionUrl.trim())
        newErrors.videoIntroductionUrl = "Video introduction is required";
      if (!portfolioUrl.trim())
        newErrors.portfolioUrl = "Portfolio URL is required";
    }

    if (InitialStep === 3) {
      if (!language.trim()) newErrors.language = "Language is required";
      if (!experienceLevel.trim())
        newErrors.experienceLevel = "Experience level is required";
      if (!availability.trim())
        newErrors.availability = "Availability is required";
    }

    if (InitialStep === 4) {
      if (!refundPolicy.trim())
        newErrors.refundPolicy = "Refund policy is required";
      if (!termsCondition.trim())
        newErrors.termsCondition = "Terms & Conditions are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  ////////////////////////////////////////
  // STEPS CONTENT WITH CONTROLLER
  ////////////////////////////////////////
  const Step1 = () => (
    <div className="basic_details">
      <FormControl fullWidth>
        <TextField
          size="small"
          label="Gig Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <small className="text-danger">{errors.title}</small>}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          size="small"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Graphic Design">Graphic Design</MenuItem>
          <MenuItem value="Writing">Writing</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
        </Select>
        {errors.category && (
          <small className="text-danger">{errors.category}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Subcategory"
          size="small"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        />
        {errors.subcategory && (
          <small className="text-danger">{errors.subcategory}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Keywords (comma-separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        {errors.keywords && (
          <small className="text-danger">{errors.keywords}</small>
        )}
      </FormControl>
      <FormControl fullWidth>
        <TextField
          size="small"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        {errors.description && (
          <small className="text-danger">{errors.description}</small>
        )}
      </FormControl>
    </div>
  );

  const Step2 = () => (
    <div className="pricing_delivary_time">
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Gig Price ($)"
          type="number"
          value={gigPrice}
          onChange={(e) => setGigPrice(Number(e.target.value))}
        />
        {errors.gigPrice && (
          <small className="text-danger">{errors.gigPrice}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Hourly Rate ($)"
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
        />
        {errors.hourlyRate && (
          <small className="text-danger">{errors.hourlyRate}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Delivery Time (Days)"
          type="number"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
        {errors.deliveryTime && (
          <small className="text-danger">{errors.deliveryTime}</small>
        )}
      </FormControl>
    </div>
  );

  const Step3 = () => (
    <div className="service_requirements">
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Gig Requirements Url"
          multiline
          rows={4}
          value={gigRequirements}
          onChange={(e) => setGigRequirements(e.target.value)}
        />
        {errors.gigRequirements && (
          <small className="text-danger">{errors.gigRequirements}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Video Introduction Url"
          multiline
          value={videoIntroductionUrl}
          onChange={(e) => setVideoIntroductionUrl(e.target.value)}
        />
        {errors.videoIntroductionUrl && (
          <small className="text-danger">{errors.videoIntroductionUrl}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Portfolio Url"
          multiline
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
        />
        {errors.portfolioUrl && (
          <small className="text-danger">{errors.portfolioUrl}</small>
        )}
      </FormControl>
    </div>
  );

  const Step4 = () => (
    <div className="availability_language">
      <FormControl fullWidth margin="normal">
        <Select
          size="small"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          <MenuItem selected value="Beginner Level">
            Beginner Level
          </MenuItem>
          <MenuItem value="Intermediate Level">Intermediate Level</MenuItem>
          <MenuItem value="Experience Level">Experience Level</MenuItem>
        </Select>

        {errors.experienceLevel && (
          <small className="text-danger">{errors.experienceLevel}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        />
        {errors.availability && (
          <small className="text-danger">{errors.availability}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          size="small"
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        {errors.language && (
          <small className="text-danger">{errors.language}</small>
        )}
      </FormControl>
    </div>
  );

  const Step5 = () => (
    <div className="complete_service">
      <FormControl fullWidth margin="normal">
        <TextField
          label="Terms & Conditions"
          multiline
          rows={4}
          value={termsCondition}
          onChange={(e) => setTermsCondition(e.target.value)}
        />
        {errors.termsCondition && (
          <small className="text-danger">{errors.termsCondition}</small>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Refund Policy"
          multiline
          rows={4}
          value={refundPolicy}
          onChange={(e) => setRefundPolicy(e.target.value)}
        />
        {errors.refundPolicy && (
          <small className="text-danger">{errors.refundPolicy}</small>
        )}
      </FormControl>
    </div>
  );

  const Step6 = () => {
    return (
      <div className="attachments">
        <FormControl fullWidth margin="normal">
          <Form.Label>Attachment</Form.Label>
          <TextField type="file" onChange={(e: any) => setAttachments(e)} />
        </FormControl>
      </div>
    );
  };
  const handleNext = () => {
    if (!validateStep()) return; // Prevents moving forward if validation fails
    setInitialStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setInitialStep((prevStep) => prevStep - 1);
  };

  const step_data = [
    {
      step: 1,
      title: "Basic Information",
    },
    { step: 2, title: "Pricing & Delivery" },
    { step: 3, title: "Gig Requirements" },
    { step: 4, title: "Availability & Language" },
    { step: 5, title: "Complete" },
  ];
  const steps = [
    "Basic Information",
    "Pricing & Delivery",
    "Gig Requirements",
    "Availability & Language",
    "Complete",
  ];

  return (
    <div className="post_service_page">
      <Container>
        <div className="post_service_page_wrapper">
          <Typography variant="h4" gutterBottom>
            Create a Service
          </Typography>
          <Stepper activeStep={InitialStep} alternativeLabel>
            {step_data.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{ marginTop: "20px" }}>
            {InitialStep === 0 && Step1()}
            {InitialStep === 1 && Step2()}
            {InitialStep === 2 && Step3()}
            {InitialStep === 3 && Step4()}
            {InitialStep === 4 && Step5()}
            {InitialStep === 5 && Step6()}
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ButtonComponent
              onClick={handleBack}
              btn_label={"Back"}
              variant={undefined}
              style={{
                background: "var(--error-color)",
                color: "var(--text-light)",
                border: "none",
              }}
              size={"small"}
              color={undefined}
              disabled={InitialStep === 0}
            />

            {InitialStep < step_data.length - 0 ? (
              <ButtonComponent
                onClick={handleNext}
                btn_label={"Next"}
                variant={undefined}
                size={"small"}
                color={undefined}
                disabled={false}
              />
            ) : (
              <ButtonComponent
                onClick={handleNext}
                btn_label={"Submit"}
                variant={undefined}
                style={{
                  background: "var(--primary-color)",
                  color: "var(--text-light)",
                }}
                size={"small"}
                color={undefined}
                disabled={false}
              />
              // <Button variant="contained" color="success">
              //   Submit
              // </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostServicePage;
