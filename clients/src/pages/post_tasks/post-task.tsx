import { useEffect, useState } from "react";
import "./post-task.css";
import PartOfDaySelector from "../../components/post_task_component/PartOfDaySelector";
import LocationSelector from "../../components/post_task_component/LocationSelector";
import DateRangePicker from "../../components/post_task_component/DateRangePicker";
import ImageUploader from "../../components/post_task_component/ImageUpoader";
import ButtonComponent from "../../components/Buttons/Button";
import { Col, Container, Form, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/layouts/Layout";
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

import {
  ArrowLeft,
  ArrowRightAlt,
  CheckCircle,
  LocationOn,
  Visibility,
} from "@mui/icons-material";
import { toast } from "react-toastify";
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
  const [Task_Date, setTaskDate] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [Task_Location, setTaskLocation] = useState<string | undefined>();
  const [Task_Detail, setTaskDetail] = useState<string | any>();
  const [Task_Category, setTaskCategory] = useState<string>();
  const [Task_Attacement, setTask_Attacement] = useState<File[]>([]);

  const [error, setError] = useState<string>("");
  const [IsflexibleTime, setIsflexibleTime] = useState(false);
  const [isflexible, setIsflexible] = useState(false);
  const [FlexibleTime, setFlexibleTime] = useState({});
  const [IsCalenderOpen, setIsCalenderOpen] = useState(false);

  useEffect(() => {
    console.log(Task_Attacement);
  }, [Task_Attacement]);
  ///////////////////////////////////
  // STEP 1 BUDGETS FRAGMENT
  ///////////////////////////////////
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
  ///////////////////////////////////////
  // STEP 2 TITLE AND CATEGORY FRAGMENT
  ///////////////////////////////////////
  const Step2 = () => {
    return (
      <div className="title_and_category_fragment">
        <Box>
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
              size="medium"
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
              size="medium"
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
  //////////////////////////////
  // STEP 3 DATE FRAGMENT
  //////////////////////////////
  const Step3 = () => {
    return (
      <div className="date_fragment">
        <Typography component="span">
          When this task needs to be completed ?
        </Typography>

        <Stack direction="row" spacing={1} paddingTop={3}>
          {/* DATE SELECTION */}
          <div className="date_selection">
            <Button
              variant={Task_Date[0] && Task_Date[1] ? "contained" : "outlined"}
              size="small"
              role="button"
              aria-label="on date"
              LinkComponent="label"
              sx={{ textTransform: "capitalize", borderRadius: 10 }}
              onClick={() => {
                setIsCalenderOpen(true);
                setIsflexible(false);
              }}
            >
              set a date
            </Button>

            <DateRangePicker
              open={IsCalenderOpen}
              onClose={() => setIsCalenderOpen(false)} // Close on selection
              PickerDate={setTaskDate}
              value={Task_Date}
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
              setTaskDate([null, null]); // Emptying the date range
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
  ///////////////////////////////////
  // STEP 4 LOCATIONS FRAGMENT
  ///////////////////////////////////
  const Step4 = () => {
    const countries = ["USA", "Canada", "India"];
    return (
      <div className="location_fragment">
        <LocationSelector SelectedLocation={setTaskLocation} />
        <div
          className={`${Task_Location == "online" && "d-none"} locations_input`}
        >
          <Typography paddingTop={3} fontSize={14}>
            Where would you like this to be done?
          </Typography>
          <Stack direction="row" spacing={1} pt={1}>
            <FormControl>
              <Select size="small" variant="filled">
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
                variant="filled"
                value={Task_Location}
                onChange={(e) => setTaskLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn htmlColor="var(--primary-color)" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Stack>
        </div>
      </div>
    );
  };
  ///////////////////////////////////
  // STEP 5 DETAILS FRAGMENT
  ///////////////////////////////////
  const Step5 = () => {
    return (
      <div className="details_fragment">
        <FormControl sx={{ width: window.innerWidth / 3 }}>
          <Form.Label className="input_label">
            key Details about the task
          </Form.Label>
          <TextField
            fullWidth
            rows={5}
            multiline
            variant="filled"
            type="text"
            value={Task_Detail}
            onChange={(e) => setTaskDetail(e.target.value)}
            placeholder="Write a Summary of the key Details"
            error={!!error}
            helperText={error}
          />
        </FormControl>
      </div>
    );
  };
  ///////////////////////////////////
  // STEP 6 ATTACEMENTS FRAGMENT
  ///////////////////////////////////
  const Step6 = () => {
    return (
      <div className="attachment_fragment">
        <Typography className="input_label">upload image(optional)</Typography>
        {/* ImageUploader Component */}
        <ImageUploader
          onImagesChange={(e: any) => {
            setTask_Attacement(e);
          }}
        />
      </div>
    );
  };
  ///////////////////////////////////
  // STEP 7 COMPLETE FRAGMENT
  ///////////////////////////////////
  const Step7 = () => {
    return (
      <div className="complete_fragment">
        <CheckCircle
          sx={{ fontSize: "5em", textAlign: "center" }}
          fontSize="large"
          htmlColor="green"
        />

        <Typography className="input_label">
          Thanks; you have successfully submited your task
        </Typography>
      </div>
    );
  };
  ///////////////////////////////////
  // STEP CONTROLLER > NEXT
  ///////////////////////////////////
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
        // Task_Date[1]
        // Task_Date[0]
        if (
          isflexible === true ||
          Object.keys(FlexibleTime).length > 0 ||
          Task_Date[0] ||
          Task_Date[1]
        ) {
          setInitialState(4); // Proceed if at least one value exists
          setError("");
        } else {
          setError("Please provide at least one date or time.");
        }

        break;
      case 4:
        // Task_Location
        if (Task_Location?.trim() === "") {
          setError("Please Select One Locations!");
        } else {
          setError("");
          setInitialState(5);
        }
        break;
      case 5:
        if (!Task_Detail || Task_Detail.trim() === "") {
          setError("Please provide details about the task!");
        } else if (Task_Detail.length > 100) {
          setError("Task details must be less than 100 characters.");
        } else {
          setError("");
          setInitialState(6);
        }
        break;
      case 6:
        setTimeout(() => {
          setInitialState(7);
          handle_submit_task();
        }, 2000);
        break;
      default:
        alert("view listing");
        break;
    }
  };
  ///////////////////////////////////
  // STEP CONTROLLER > BACKWORD
  ///////////////////////////////////
  const StepControlPrev = () => {
    switch (InitialState) {
      case 7:
        setInitialState(6);
        break;
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
  ///////////////////////////////////
  // STEP MENUES OBJECT DATA
  ///////////////////////////////////
  const StepMenu = [
    {
      step: 1,
      name: "budget",
    },
    { step: 2, name: "title" },
    { step: 3, name: "date" },
    { step: 4, name: "location" },
    { step: 5, name: "description" },
    { step: 6, name: "Attachment" },
    { step: 7, name: "complete" },
  ];
  ///////////////////////////////////
  // HANDLE SUBMIT TASKS
  ///////////////////////////////////
  const handle_submit_task = () => {
    try {
      const data = {};
      toast.success("Task Submited Successful");
      // const response=await axios.post(`${}/task`,{})
    } catch (error) {
      console.log(error);
    }
  };
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
                    sx={{
                      fontWeight: "bold",
                      color: "var(--secondary-color)",
                      textTransform: "capitalize",
                    }}
                  >
                    Let’s begin with the essentials of your tasks.
                  </Typography>
                  <div className="relative">
                    {/* Page Transition Effect */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={InitialState} // Ensures animation runs when state changes
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full"
                      >
                        {InitialState == 1 && Step1()}
                        {InitialState == 2 && Step2()}
                        {InitialState == 3 && Step3()}
                        {InitialState == 4 && Step4()}
                        {InitialState == 5 && Step5()}
                        {InitialState == 6 && Step6()}
                        {InitialState == 7 && Step7()}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* STEPS CONTROLS */}
                  <Box width={500} gap={3} mt={2} display="flex">
                    <ButtonComponent
                      onClick={StepControlPrev}
                      size="small"
                      color="success"
                      variant="contained"
                      btn_label={
                        <>
                          <ArrowLeft />
                          <span>back</span>
                        </>
                      }
                    />

                    <ButtonComponent
                      onClick={StepControlNext}
                      size="small"
                      color="primary"
                      variant="contained"
                      btn_label={
                        InitialState == 6 ? (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span>Get Quotes</span>
                            <ArrowRightAlt style={{ marginLeft: "5px" }} />
                          </div>
                        ) : InitialState == 7 ? (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span>view listing</span>
                            <span className="px-1" />
                            <Visibility fontSize="small" />
                          </div>
                        ) : (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span>go next</span>
                            <ArrowRightAlt
                              fontSize="small"
                              style={{ marginLeft: "5px" }}
                            />
                          </div>
                        )
                      }
                    />
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
