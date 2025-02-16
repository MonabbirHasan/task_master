import React, { useState } from 'react';
import Header from '../../components/layouts/Header/Header';
import Footer from '../../components/layouts/Footer/Footer';
import './wallet-page.css';

const WalletPage: React.FC = () => {
  const [balance] = useState(1500); // Example wallet balance
  const [transactions] = useState([
    { id: 1, date: '2025-01-20', amount: 200, type: 'Deposit' },
    { id: 2, date: '2025-01-18', amount: -50, type: 'Withdrawal' },
    { id: 3, date: '2025-01-15', amount: 100, type: 'Deposit' },
  ]);

  const handleWithdraw = (method: string) => {
    alert(`Withdrawing ${balance} using ${method}`);
    // Logic for withdrawal can be added here
  };

  const handleDeposit = () => {
    alert('Deposit functionality can be implemented here');
    // Logic for deposit can be added here
  };

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />
      <div className="wallet-container">
        <header className="wallet-header">
          <h1>Your Wallet</h1>
          <p>Manage your balance, view transactions, and make withdrawals or deposits.</p>
        </header>

        <section className="wallet-summary">
          <div className="wallet-balance">
            <h2>Wallet Balance</h2>
            <p>${balance.toFixed(2)}</p>
          </div>

          <div className="financial-graph">
            <h3>Recent Earnings</h3>
            <div className="graph-placeholder">
              {/* Graph can be integrated here (e.g., using charting libraries like Chart.js) */}
              <p>Graphical representation of earnings</p>
            </div>
          </div>
        </section>

        <section className="transaction-history">
          <h3>Transaction History</h3>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id} className={`transaction ${transaction.type.toLowerCase()}`}>
                <span>{transaction.date}</span>
                <span>{transaction.type}</span>
                <span>${transaction.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="wallet-actions">
          <h3>Withdraw Funds</h3>
          <div className="withdraw-options">
            <button onClick={() => handleWithdraw('Bank Transfer')}>Withdraw via Bank</button>
            <button onClick={() => handleWithdraw('PayPal')}>Withdraw via PayPal</button>
            <button onClick={() => handleWithdraw('Cryptocurrency')}>Withdraw via Crypto</button>
          </div>

          <h3>Deposit Funds</h3>
          <button onClick={handleDeposit}>Deposit via Bank</button>
        </section>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default WalletPage;
