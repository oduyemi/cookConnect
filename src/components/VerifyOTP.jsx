import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

export const VerifyOTP = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cookconnectapi.vercel.app/v1/otp/verify', { email, otp });
            if (response.status === 200) {
                setMessage('Email verification successful! You can now log in.');
            }
        } catch (error) {
            setMessage('Invalid or expired OTP. Please try again.');
        }
    };

    return (
        <Box className="container mt-5 pt-5">
            <Box className="row">
                <Box className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Verify OTP</h2>
                    <Box className="text-center mb-5 text-dark">
                        Enter the 6 digits verification code sent to your email
                    </Box>
                    <Box className="card my-5">
                        <form onSubmit={handleVerifyOtp}>
                            <h4 className="text-center mb-4">Enter your email and code</h4>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your OTP"
                                    maxLength="6"
                                    required
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-100 btn btn-success bbtn"
                            >
                                Verify
                            </button>
                            <p className="mt-3 text-center">{message}</p>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
