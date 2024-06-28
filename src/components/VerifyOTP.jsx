import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

export const VerifyOTP = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState('');

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        console.log("Sending OTP verification request for email:", email, "and OTP:", otp); // Debugging log
        try {
            const response = await axios.post('https://cookconnectapi.vercel.app/v1/otp/verify', { email, otp });
            if (response.status === 200) {
                setMessage('Email verification successful! Redirecting to login.');
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2000);
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
                    <p>{message}</p>
                    <Box className="card my-5">
                        <form onSubmit={handleVerifyOtp}>
                            <h4 className="text-center mb-4">Enter your code</h4>
                            <div className="d-flex mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="d-flex mb-3">
                                <input
                                    type="text"
                                    maxLength="6"
                                    pattern="[0-9]{6}"
                                    className="form-control"
                                    onFocus={(e) => e.target.select()}
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
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
