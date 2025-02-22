import React from "react";
import "./billing_payment_page.css";
import {
  Card,
  CardContent,
  Button,
  Input,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";
import { CreditCard, AccountBalanceWallet } from "@mui/icons-material";
import { Container, Row, Col } from "react-bootstrap";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
const BillingPaymentPage: React.FC = () => {
  return (
    <div className="billing_payment_page">
      <Container>
        <div className="billing_payment_wrapper">
          <h2 className="billing-title">Billing & Payments</h2>

          {/* Wallet Balance */}
          <Card className="mb-4">
            <CardContent className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="balance-label">Available Balance</h3>
                <p className="balance-amount">$1,250.00</p>
              </div>
              <Stack direction="column" spacing={1}>
                <Button variant="outlined" className="withdraw-btn">
                  <AccountBalanceWallet className="me-2" /> Withdraw Funds
                </Button>
                <ButtonComponent
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  startIcon={<AccountBalanceWallet />}
                  btn_label={"Add Funds"}
                  variant={undefined}
                  size={undefined}
                  color={undefined}
                  disabled={false}
                />
                <ButtonComponent
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  startIcon={<AccountBalanceWallet />}
                  btn_label={"Add Funds"}
                  variant={undefined}
                  size={undefined}
                  color={undefined}
                  disabled={false}
                />
              </Stack>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="mb-4">
            <CardContent>
              <h3 className="section-title">Payment Methods</h3>
              <div className="payment-method-list">
                <div className="payment-method d-flex justify-content-between p-3">
                  <div className="d-flex align-items-center">
                    <CreditCard className="me-2" />
                    <span>Visa **** 1234</span>
                  </div>
                  <Button variant="outlined">Remove</Button>
                </div>
                <div className="payment-method d-flex justify-content-between p-3">
                  <div className="d-flex align-items-center">
                    <CreditCard className="me-2" />
                    <span>PayPal - user@example.com</span>
                  </div>
                  <Button variant="outlined">Remove</Button>
                </div>
              </div>
              <Button className="add-payment-btn mt-3">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardContent>
              <h3 className="section-title">Transaction History</h3>
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
                  <TableRow>
                    <TableCell>Feb 20, 2025</TableCell>
                    <TableCell>Payment Received</TableCell>
                    <TableCell className="text-success">+$500.00</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feb 18, 2025</TableCell>
                    <TableCell>Withdrawal to PayPal</TableCell>
                    <TableCell className="text-danger">-$300.00</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default BillingPaymentPage;
