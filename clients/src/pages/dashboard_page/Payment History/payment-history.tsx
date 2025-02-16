import React, { useState } from "react";
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import Header from '../../../components/layouts/Header/Header';
import Footer from "../../../components/layouts/Footer/Footer";
import "./payment-history.css";

const PaymentHistory = () => {
  const [activeTab, setActiveTab] = useState("earnings");
  const [filter, setFilter] = useState("monthly");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
  };

  const earningsData = [
    { id: 1, date: "2025-02-01", description: "Freelance Project", amount: "$500", status: "Completed" },
    { id: 2, date: "2025-02-10", description: "Freelance Project", amount: "$150", status: "Completed" },
  ];

  const withdrawalsData = [
    { id: 1, date: "2025-02-05", description: "Bank Transfer", amount: "$300", status: "Completed" },
  ];

  const totalEarnings = earningsData
    .reduce((acc, payment) => acc + parseFloat(payment.amount.slice(1)), 0)
    .toFixed(2);

  const totalWithdrawn = withdrawalsData
    .reduce((acc, payment) => acc + parseFloat(payment.amount.slice(1)), 0)
    .toFixed(2);

  return (
    <div className="main-container">
      <Header />
      <Box className="payment-history-container">
        <Typography variant="h4" className="page-title">
          Payment History
        </Typography>

        {/* Balance Card */}
        <Card className="summary-card">
          <Box padding={3}>
            <Typography variant="h6" className="summary-text">
              Total Earnings: ${totalEarnings || "0.00"}
            </Typography>
            <Typography variant="h6" className="summary-text">
              Total Withdrawn: ${totalWithdrawn || "0.00"}
            </Typography>
          </Box>
        </Card>

        <Divider sx={{ margin: "20px 0" }} />

        {/* Tabs for Transactions */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          className="tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={`Earnings (${earningsData.length})`} value="earnings" className="tab" />
          <Tab label={`Withdrawals (${withdrawalsData.length})`} value="withdrawals" className="tab" />
        </Tabs>

        {/* Filter Dropdown */}
        <Box className="filter-container">
          <FormControl fullWidth>
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
              className="filter-dropdown"
            >
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Earnings Tab Content */}
        {activeTab === "earnings" && (
          <Box className="section-container">
            {earningsData.length > 0 ? (
              <TableContainer component={Paper} className="table-container">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {earningsData.map((transaction) => (
                      <TableRow key={transaction.id} hover>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box className="empty-section">
                <Typography variant="body1" align="center" color="textSecondary">
                  No earnings yet. Perform tasks to start earning!
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Browse Tasks
                </Button>
              </Box>
            )}
          </Box>
        )}

        {/* Withdrawals Tab Content */}
        {activeTab === "withdrawals" && (
          <Box className="section-container">
            {withdrawalsData.length > 0 ? (
              <TableContainer component={Paper} className="table-container">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {withdrawalsData.map((transaction) => (
                      <TableRow key={transaction.id} hover>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box className="empty-section">
                <Typography variant="body1" align="center" color="textSecondary">
                  No withdrawals yet. Withdraw your funds today!
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Withdraw Funds
                </Button>
              </Box>
            )}
          </Box>
        )}

      </Box>
      <Footer />
    </div>
  );
};

export default PaymentHistory;
