import React from "react";
import "./billing_payment_page.css";
import { Stack } from "@mui/material";
import {
  CreditCard,
  AccountBalanceWallet,
  Add,
  Delete,
  History,
  UploadFile,
} from "@mui/icons-material";
import { Table, Container } from "react-bootstrap";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";
const billing_data = [
  {
    payment_id: "PAY123456",
    user_id: "USR001",
    amount: 99.99,
    currency: "USD",
    payment_date: "2025-02-01T14:30:00Z",
    status: "Completed",
    payment_method: "Credit Card",
    transaction_id: "TXN123456789",
    subscription_plan: "Monthly",
  },
  {
    payment_id: "PAY123457",
    user_id: "USR002",
    amount: 499.99,
    currency: "USD",
    payment_date: "2025-02-10T10:00:00Z",
    status: "Completed",
    payment_method: "PayPal",
    transaction_id: "TXN987654321",
    subscription_plan: "Yearly",
  },
  {
    payment_id: "PAY123458",
    user_id: "USR003",
    amount: 249.99,
    currency: "USD",
    payment_date: "2025-02-15T16:45:00Z",
    status: "Failed",
    payment_method: "Debit Card",
    transaction_id: "TXN111223344",
    subscription_plan: "6-Month",
  },
  {
    payment_id: "PAY123459",
    user_id: "USR004",
    amount: 99.99,
    currency: "USD",
    payment_date: "2025-02-20T08:15:00Z",
    status: "Completed",
    payment_method: "Credit Card",
    transaction_id: "TXN556677889",
    subscription_plan: "Monthly",
  },
  {
    payment_id: "PAY123460",
    user_id: "USR005",
    amount: 599.99,
    currency: "USD",
    payment_date: "2025-02-18T13:25:00Z",
    status: "Completed",
    payment_method: "Bank Transfer",
    transaction_id: "TXN223344556",
    subscription_plan: "Yearly",
  },
];

const BillingPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="billing_payment_page">
      <Container>
        <div className="billing_payment_wrapper">
          <h2 className="billing-title">Billing & Payments</h2>

          {/* Wallet Balance */}
          <div className="billing_payment_wallet">
            <div>
              <h3 className="balance-label">Available Balance</h3>
              <p className="balance-amount">$1,250.00</p>
            </div>
            <Stack direction="column" spacing={1}>
              <ButtonComponent
                onClick={() => {}}
                startIcon={<AccountBalanceWallet />}
                btn_label={"Withdraw Funds"}
                style={{
                  textTransform: "capitalize",
                  background: "var(--secondary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                variant={undefined}
                size={undefined}
                color={undefined}
                disabled={false}
              />
              <ButtonComponent
                onClick={() => {}}
                startIcon={<Add />}
                btn_label={"Add Funds"}
                style={{
                  textTransform: "capitalize",
                  background: "var(--secondary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                variant={undefined}
                size={undefined}
                color={undefined}
                disabled={false}
              />
            </Stack>
          </div>

          {/* Payment Methods */}
          <div className="billing_payment_method">
            <h3 className="section-title">Payment Methods</h3>
            <div className="payment-method-list">
              <div className="payment-method d-flex justify-content-between p-3">
                <div className="d-flex align-items-center">
                  <CreditCard className="me-2" />
                  <span>Visa **** 1234</span>
                </div>
                <ButtonComponent
                  onClick={() => {}}
                  startIcon={<Delete />}
                  btn_label={"Remove"}
                  style={{
                    textTransform: "capitalize",
                    background: "var(--error-color)",
                    color: "var(--text-light)",
                    border: "none",
                  }}
                  size={"small"}
                  variant={undefined}
                  color={undefined}
                  disabled={false}
                />
              </div>
            </div>
            <div className="payment_method_action">
              <ButtonComponent
                onClick={() => {}}
                startIcon={<Add />}
                btn_label={"Add Payment Method"}
                style={{
                  textTransform: "capitalize",
                  background: "var(--secondary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                size={"large"}
                variant={undefined}
                color={undefined}
                disabled={false}
              />
            </div>
          </div>

          {/* Tax Documents */}
          <div className="billing_tax_documents">
            <h3 className="section-title">Tax Documents</h3>
            <p className="info-text">
              Upload necessary tax documents to ensure compliance with
              regulations.
            </p>
            <div className="tax-document-action">
              <ButtonComponent
                onClick={() => {}}
                startIcon={<UploadFile />}
                btn_label={"Upload Tax Document"}
                style={{
                  textTransform: "capitalize",
                  background: "var(--primary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                size={"large"}
                variant={undefined}
                color={undefined}
                disabled={false}
              />
            </div>
          </div>

          {/* Transaction History */}
          <div className="billing_payment_history">
            <Stack direction="row" justifyContent="space-between">
              <h3 className="section-title">Transaction History</h3>
              <ButtonComponent
                onClick={() => navigate("/profile/payment-history")}
                startIcon={<History />}
                btn_label={"View Full History"}
                style={{
                  textTransform: "capitalize",
                  background: "var(--primary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                size={"small"}
                variant={undefined}
                color={undefined}
                disabled={false}
              />
            </Stack>
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
                {billing_data.map((item, index) => (
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BillingPaymentPage;
