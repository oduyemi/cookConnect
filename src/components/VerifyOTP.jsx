import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

export const VerifyOTP = () => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = verificationCode.join("");

    try {
      const response = await axios.post("https://cookconnectapi.vercel.app/v1/verify", {
        email: "yhermii@gmail.com", 
        otp: code,
      });
      const { message } = response.data;
      setFlashMessage({ type: "success", message });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred while verifying the email";
      setFlashMessage({ type: "error", message: errorMessage });
    }
  };

  return (
    <Box className="container mt-5 pt-5">
      <Box className="row">
        <Box className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Verify OTP</h2>
          {flashMessage && (
            <div className={`alert ${flashMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
              {flashMessage.message}
            </div>
          )}
          <Box className="text-center mb-5 text-dark">
            Enter the 6 digits verification code sent to your email
          </Box>
          <Box className="card my-5">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center mb-4">Enter your code</h4>
              <div className="d-flex mb-3">
                {verificationCode.map((value, index) => (
                  <input
                    key={index}
                    type="tel"
                    maxLength="1"
                    pattern="[0-9]"
                    className="form-control"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onFocus={(e) => e.target.select()}
                    required
                  />
                ))}
              </div>
              <button type="submit" className="w-100 btn btn-success bbtn">
                Verify
              </button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
