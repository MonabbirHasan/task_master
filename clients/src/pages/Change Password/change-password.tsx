import React, { useState } from "react";
import Header from '../../components/layouts/Header/Header';
import Footer from "../../components/layouts/Footer/Footer";
import "./change-password.css";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    // Type the event as React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Password validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

        if (!passwordRegex.test(newPassword)) {
            setError(
                "Password must be at least 12 characters long and include uppercase, lowercase, number, and special symbol."
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password must match.");
            return;
        }

        setError("");
        alert("Password successfully changed!");
    };

    return (
        <div className="main-container">
        {/* Header Component */}
        <Header />
        <div className="change-password-container">
            <div className="form-wrapper">
                <h2>Change Password</h2>
                <p className="form-description">
                    Ensure your account is secure by choosing a strong password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="current-password">Current Password</label>
                        <div className="input-with-icon">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="current-password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter your current password"
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="new-password">New Password</label>
                        <div className="input-with-icon">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="input-with-icon">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your new password"
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn-submit">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
           {/* Footer Component */}
           <Footer />
        </div>
    );
};

export default ChangePassword;
