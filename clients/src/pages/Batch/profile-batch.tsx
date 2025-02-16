// BatchStatsPage.jsx
import React from 'react';
import './profile-batch.css';

const BatchStatsPage = () => {
    return (
        <div className="dashboard">
            <h1>My Tasker Dashboard</h1>

            <div className="tier-section">
                <h2>Your Current Tier</h2>
                <div className="tier-info">
                    <div className="tier">Bronze Tasker Tier</div>
                    <div className="tier-label">Bronze</div>
                    <div className="service-fee">20% service fee excl. GST</div>
                </div>
            </div>

            <div className="tier-section">
                <h2>Your Next Tier</h2>
                <div className="tier-info">
                    <div className="tier">Silver Tasker Tier</div>
                    <div className="tier-label">Silver</div>
                    <div className="service-fee">18.5% service fee excl. GST</div>
                </div>
            </div>

            <div className="earnings-section">
                <h2>Your Earnings (last 30 days)</h2>
                <p>Your earnings are $880 away from Silver and lowering service fees.</p>

                <div className="progress-bar">
                    <div className="progress" style={{ width: '0%' }}></div>
                </div>

                <div className="earnings-labels">
                    <span>$0</span>
                    <span>$880</span>
                    <span>$2,650</span>
                    <span>$5,300+</span>
                </div>
            </div>

            <div className="info-section">
                <a href="#" className="info-link">How do tiers work?</a>
            </div>
        </div>
    );
};

export default BatchStatsPage;
