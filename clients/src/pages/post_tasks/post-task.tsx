import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/layouts/Layout";
import "./post-task.css";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PartOfDaySelector from "../../components/post_task_component/PartOfDaySelector";
import LocationSelector from "../../components/post_task_component/LocationSelector";
import DateRangePicker from "../../components/post_task_component/DateRangePicker";
import { CheckCircle, LocationCity, LocationOn } from "@mui/icons-material";
const categories = [
  "Home Services",
  "Delivery",
  "Cleaning",
  "Writing & Translation",
  "Tech Support",
  "Graphic Design",
  "Personal Assistance",
];
const PostTask = () => {
  const [InitialState, setInitialState] = useState<number>(1);
  const [Task_Budget, setTaskBudget] = useState<number>(0);
  const [Task_Title, setTaskTitle] = useState("");
  const [Task_Date, setTaskDate] = useState<string | number>();
  const [Task_Location, setTaskLocation] = useState<string | undefined>();
  const [Task_Detail, setTaskDetail] = useState<string>();
  const [Task_Category, setTaskCategory] = useState<string>();
  const [error, setError] = useState<string>("");

  const [IsflexibleTime, setIsflexibleTime] = useState(false);
  const [isflexible, setIsflexible] = useState(false);
  const [FlexibleTime, setFlexibleTime] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const Step1 = () => {
    return (
      <div className="budget_fragment">
        <Typography variant="body2" gutterBottom sx={{ fontWeight: "bold" }}>
          Set Your Ideal Budget
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Choose a budget that works for you! You can always adjust the final
          price later.
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 400, mt: 2 }}>
          <Form.Group>
            <TextField
              fullWidth
              label="What is your budget?"
              variant="outlined"
              value={Task_Budget}
              onChange={(e: any) => setTaskBudget(e.target.value)}
              error={!!error}
              helperText={error}
              size="medium"
              InputProps={{
                startAdornment: <Typography>$</Typography>,
              }}
            />
          </Form.Group>
        </Box>
      </div>
    );
  };
  const Step2 = () => {
    return (
      <div className="title_and_category_fragment">
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Describe Your Task
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Provide a clear and detailed title to help Taskers understand what
            you need.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 400, mt: 3 }}>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Task Title"
              variant="outlined"
              value={Task_Title}
              onChange={(e) => setTaskTitle(e.target.value)}
              error={!!error}
              helperText={error}
              placeholder="E.g., Assemble IKEA furniture"
            />
          </Form.Group>

          <Form.Group>
            <TextField
              select
              fullWidth
              label="Select Category"
              variant="outlined"
              value={Task_Category}
              onChange={(e) => setTaskCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          </Form.Group>
        </Box>
      </div>
    );
  };
  const Step3 = () => {
    return (
      <div className="date_fragment">
        <Typography component="span">when do you need this done?</Typography>

        <Stack direction="row" spacing={1} paddingTop={3}>
          {/* DATE SELECTION */}
          <div className="date_selection">
            <Button
              variant={dateRange[0] && dateRange[1] ? "contained" : "outlined"}
              size="small"
              role="button"
              aria-label="on date"
              LinkComponent="label"
              sx={{ textTransform: "capitalize", borderRadius: 10 }}
              onClick={() => {
                setIsOpen(true);
                setIsflexible(false);
              }}
            >
              set a date
            </Button>

            <DateRangePicker
              open={isOpen}
              onClose={() => setIsOpen(false)} // Close on selection
              PickerDate={setDateRange}
              value={dateRange}
              fromLabel="Start Date"
              toLabel="End Date"
            />
          </div>

          {/* I'M FLEXIBLE */}
          <Button
            variant={isflexible ? "contained" : "outlined"}
            size="small"
            role="button"
            aria-label="set a date"
            sx={{ textTransform: "capitalize", borderRadius: 10 }}
            onClick={() => {
              isflexible ? setIsflexible(false) : setIsflexible(true);
              setDateRange([null, null]); // Emptying the date range
            }}
          >
            I'm Flexible
          </Button>
        </Stack>
        {error && <Alert color="error">{error.toLowerCase()}</Alert>}
        {/* FLEXIBLE TIME SELECTION */}
        <div className="flexible_time_selection">
          {isflexible && (
            <FormControl sx={{ pt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={IsflexibleTime}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setIsflexibleTime(event.target.checked)
                    }
                    style={{ textTransform: "capitalize" }}
                  />
                }
                label="I need certain time of day"
              />
            </FormControl>
          )}
          {/* FLEXIBLE TIMES */}
          <div className="flexible_times d-flex g-3">
            {IsflexibleTime && (
              <PartOfDaySelector
                PartOfDaySelect={(e: any) => setFlexibleTime(e)}
              />
            )}
            {/* {IsflexibleTime&&FlexibleTime?.part}-
            {IsflexibleTime&&FlexibleTime?.time} */}
          </div>
        </div>
      </div>
    );
  };
  const Step4 = () => {
    const countries = ["USA", "Canada", "India"];
    return (
      <div className="location_fragment">
        <LocationSelector SelectedLocation={setTaskLocation} />
        <div
          className={`${Task_Location == "online" && "d-none"} locations_input`}
        >
          <Typography>Where would you like this to be done?</Typography>
          <Stack direction="row" spacing={1}>
            <FormControl>
              <Select size="small">
                {countries.map((countryName) => (
                  <MenuItem key={countryName} value={countryName}>
                    {countryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                size="small"
                value={Task_Location}
                onChange={(e) => setTaskLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn htmlColor="var(--primary-color)" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </FormControl>
          </Stack>
        </div>
      </div>
    );
  };
  const Step5 = () => {
    return (
      <div className="details_fragment">
        <FormControl sx={{ minWidth: 320 }}>
          <Form.Label>key Details about the task</Form.Label>
          <TextField
            fullWidth
            rows={4}
            multiline
            variant="outlined"
            type="text"
            value={Task_Detail}
            onChange={(e) => setTaskDetail(e.target.value)}
            placeholder="Write a Summary of the key Details"
            helperText={error}
          />
        </FormControl>
      </div>
    );
  };
  const Step6 = () => {
    return (
      <div className="complete_fragment">
        <CheckCircle
          sx={{ fontSize: "5em", textAlign: "center" }}
          fontSize="large"
          htmlColor="green"
        />
        <Typography>
          Thanks; you have successfully submited your task
        </Typography>
      </div>
    );
  };
  const StepControlNext = () => {
    switch (InitialState) {
      case 1:
        if (!isNaN(Task_Budget)) {
          setTaskBudget(Task_Budget);
          if (Task_Budget < 5 || Task_Budget > 9999) {
            setError("The price must be between $5 and $9999");
          } else {
            setError("");
            setInitialState(2);
          }
        }
        break;
      case 2:
        if (Task_Title.trim() === "") {
          setError("Task title cannot be empty.");
        } else if (Task_Title.length >= 100) {
          setError("Task title must be less than 100 characters.");
        } else {
          setError("");
          setInitialState(3);
        }
        break;
      case 3:
        // IsflexibleTime
        // FlexibleTime
        // dateRange[1]
        // dateRange[0]
        if (
          !isflexible ||
          Object.keys(FlexibleTime).length == 0 ||
          !dateRange[1] ||
          !dateRange[0]
        ) {
          setError("Please Provide Any of Date Of Time");
          return;
        }
        setInitialState(4);
        break;
      case 4:
        // Task_Location
        if (Task_Location?.trim() === "") {
          setError("Please Select One Locations!");
          return;
        }
        setInitialState(5);
        break;
      case 5:
        // details
        if (Task_Detail?.trim() === "") {
          setError("Please Provide A Details about the Task!");
          return;
        }
        setInitialState(6);
        break;
      case 6:
        setInitialState(7);
        break;
      default:
        setInitialState(1);
        break;
    }
  };
  const StepControlPrev = () => {
    switch (InitialState) {
      case 6:
        setInitialState(5);
        break;
      case 5:
        setInitialState(4);
        break;
      case 4:
        setInitialState(3);
        break;
      case 3:
        setInitialState(2);
        break;
      case 2:
        setInitialState(1);
        break;
      default:
        break;
    }
  };
  const StepMenu = [
    {
      step: 1,
      name: "budget",
    },
    { step: 2, name: "title" },
    { step: 3, name: "date" },
    { step: 4, name: "location" },
    { step: 5, name: "description" },
    { step: 6, name: "complete" },
  ];
  return (
    <Layout>
      <div className="post_task_page">
        <Container>
          <div className="post_task_page_wrapper">
            <Row>
              {/* POST TASK LEFT CONTENT */}
              <Col lg={2}>
                <div className="post_task_page_left_menu">
                  <List disablePadding>
                    {StepMenu.map((menu, index) => (
                      <ListItem
                        sx={{ textTransform: "capitalize" }}
                        disableGutters
                        disablePadding
                        key={index}
                      >
                        <ListItemButton
                          onClick={() => setInitialState(menu.step)}
                          disabled={menu.step !== InitialState}
                        >
                          {menu.name}
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Col>

              {/* POST TAK RIGHT CONTENT */}
              <Col lg={10}>
                <div className="post_task_page_right_content">
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "var(--primary-color)" }}
                  >
                    Let’s begin with the essentials of your tasks.
                  </Typography>
                  {InitialState == 1 && Step1()}
                  {InitialState == 2 && Step2()}
                  {InitialState == 3 && Step3()}
                  {InitialState == 4 && Step4()}
                  {InitialState == 5 && Step5()}
                  {InitialState == 6 && Step6()}
                  {/* STEPS CONTROLS */}
                  <Box width={500} gap={3} mt={2} display="flex">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: "none", borderRadius: 30 }}
                      onClick={StepControlPrev}
                    >
                      Back
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ textTransform: "none", borderRadius: 30 }}
                      // disabled={!!error || !budget}
                      onClick={StepControlNext}
                    >
                      {InitialState == 5
                        ? "Get Quotes"
                        : InitialState == 6
                        ? "Done"
                        : "Next"}
                    </Button>
                  </Box>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};
export default PostTask;
