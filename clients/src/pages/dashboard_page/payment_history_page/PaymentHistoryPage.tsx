import React, { useEffect, useState } from "react";
import { Table, Form, Container, Pagination } from "react-bootstrap";
import "./payment_history_page.css";
import { FormControl } from "@mui/material";
// Dummy data
const billing_data = [
  {
    payment_id: "PAY123001",
    user_id: "USR001",
    amount: 99.99,
    currency: "USD",
    payment_date: "2025-01-01T10:00:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123002",
    user_id: "USR002",
    amount: 199.99,
    currency: "USD",
    payment_date: "2025-01-02T11:30:00Z",
    status: "Failed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123003",
    user_id: "USR003",
    amount: 349.99,
    currency: "USD",
    payment_date: "2025-01-03T09:15:00Z",
    status: "Completed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123004",
    user_id: "USR004",
    amount: 599.99,
    currency: "USD",
    payment_date: "2025-01-04T14:00:00Z",
    status: "Completed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123005",
    user_id: "USR005",
    amount: 129.99,
    currency: "USD",
    payment_date: "2025-01-05T13:45:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123006",
    user_id: "USR006",
    amount: 199.99,
    currency: "USD",
    payment_date: "2025-01-06T08:20:00Z",
    status: "Failed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123007",
    user_id: "USR007",
    amount: 249.99,
    currency: "USD",
    payment_date: "2025-01-07T15:30:00Z",
    status: "Completed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123008",
    user_id: "USR008",
    amount: 89.99,
    currency: "USD",
    payment_date: "2025-01-08T11:00:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123009",
    user_id: "USR009",
    amount: 399.99,
    currency: "USD",
    payment_date: "2025-01-09T16:10:00Z",
    status: "Failed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123010",
    user_id: "USR010",
    amount: 559.99,
    currency: "USD",
    payment_date: "2025-01-10T07:50:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123011",
    user_id: "USR011",
    amount: 649.99,
    currency: "USD",
    payment_date: "2025-01-11T10:30:00Z",
    status: "Completed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123012",
    user_id: "USR012",
    amount: 89.99,
    currency: "USD",
    payment_date: "2025-01-12T12:00:00Z",
    status: "Failed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123013",
    user_id: "USR013",
    amount: 179.99,
    currency: "USD",
    payment_date: "2025-01-13T14:30:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123014",
    user_id: "USR014",
    amount: 299.99,
    currency: "USD",
    payment_date: "2025-01-14T08:30:00Z",
    status: "Failed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123015",
    user_id: "USR015",
    amount: 159.99,
    currency: "USD",
    payment_date: "2025-01-15T13:45:00Z",
    status: "Completed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123016",
    user_id: "USR016",
    amount: 419.99,
    currency: "USD",
    payment_date: "2025-01-16T09:15:00Z",
    status: "Completed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123017",
    user_id: "USR017",
    amount: 399.99,
    currency: "USD",
    payment_date: "2025-01-17T14:00:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123018",
    user_id: "USR018",
    amount: 549.99,
    currency: "USD",
    payment_date: "2025-01-18T12:30:00Z",
    status: "Completed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123019",
    user_id: "USR019",
    amount: 129.99,
    currency: "USD",
    payment_date: "2025-01-19T10:15:00Z",
    status: "Failed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123020",
    user_id: "USR020",
    amount: 299.99,
    currency: "USD",
    payment_date: "2025-01-20T16:45:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123021",
    user_id: "USR021",
    amount: 179.99,
    currency: "USD",
    payment_date: "2025-01-21T13:30:00Z",
    status: "Completed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123022",
    user_id: "USR022",
    amount: 449.99,
    currency: "USD",
    payment_date: "2025-01-22T11:00:00Z",
    status: "Completed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123023",
    user_id: "USR023",
    amount: 299.99,
    currency: "USD",
    payment_date: "2025-01-23T10:30:00Z",
    status: "Completed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123024",
    user_id: "USR024",
    amount: 499.99,
    currency: "USD",
    payment_date: "2025-01-24T09:00:00Z",
    status: "Failed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123025",
    user_id: "USR025",
    amount: 149.99,
    currency: "USD",
    payment_date: "2025-01-25T13:15:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123026",
    user_id: "USR026",
    amount: 299.99,
    currency: "USD",
    payment_date: "2025-01-26T10:45:00Z",
    status: "Completed",
    payment_method: "Bank Transfer",
  },
  {
    payment_id: "PAY123027",
    user_id: "USR027",
    amount: 99.99,
    currency: "USD",
    payment_date: "2025-01-27T14:30:00Z",
    status: "Failed",
    payment_method: "Debit Card",
  },
  {
    payment_id: "PAY123028",
    user_id: "USR028",
    amount: 199.99,
    currency: "USD",
    payment_date: "2025-01-28T11:00:00Z",
    status: "Completed",
    payment_method: "Credit Card",
  },
  {
    payment_id: "PAY123029",
    user_id: "USR029",
    amount: 499.99,
    currency: "USD",
    payment_date: "2025-01-29T12:45:00Z",
    status: "Completed",
    payment_method: "PayPal",
  },
  {
    payment_id: "PAY123030",
    user_id: "USR030",
    amount: 599.99,
    currency: "USD",
    payment_date: "2025-01-30T15:15:00Z",
    status: "Completed",
    payment_method: "Debit Card",
  },
];

const PaymentHistoryPage: React.FC = () => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(billing_data);

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the current page data
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="payment_history_page">
      <Container>
        <div className="payment_history_page_wrapper">
          <h2>Payment History</h2>
          {/* Filter */}
          <div className="payment_history_filter">
            <FormControl>
              <Form.Label>payment method</Form.Label>
              <Form.Select>
                {billing_data.map((method, index) => (
                  <option value="">{method.payment_method}</option>
                ))}
              </Form.Select>
            </FormControl>
            <FormControl>
              <Form.Label>payment status</Form.Label>
              <Form.Select>
                <option value="">rejected</option>
                <option value="">pending</option>
                <option value="">failed</option>
                <option value="">complete</option>
              </Form.Select>
            </FormControl>
            <FormControl>
              <Form.Label>payment ID</Form.Label>
              <Form.Control placeholder="Enter Payment ID" />
            </FormControl>
          </div>

          {/* Table */}
          <div className="payment_history_table">
            <Table responsive>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>User ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Payment Date</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.payment_id}</td>
                    <td>{item.user_id}</td>
                    <td>
                      {item.amount} {item.currency}
                    </td>
                    <td
                      className={
                        item.status === "Completed"
                          ? "status-completed"
                          : "status-failed"
                      }
                    >
                      {item.status}
                    </td>
                    <td>{new Date(item.payment_date).toLocaleDateString()}</td>
                    <td>{item.payment_method}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Pagination */}
            <Pagination className="payment_history_pagination">
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentHistoryPage;
