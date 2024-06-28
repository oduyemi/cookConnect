import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const RegisterForm = () => {
    const { handleRegister, flashMessage } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister(formData);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Box className="container mt-5">
            <Box className="row">
                <Box className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Registration Form</h2>
                    {flashMessage && (
                        <div className={`alert ${flashMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                            {flashMessage.message}
                        </div>
                    )}
                    <Box className="text-center mb-5 text-dark">Join our community</Box>
                    <Box className="card my-5">
                        <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                            <Box className="text-center">
                                <img src={require("../assets/images/signin.jpg")} width="200px" alt="profile" className="rounded-circle" />
                            </Box>
                            <Box className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    aria-describedby="emailHelp"
                                    placeholder="First Name"
                                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    value={formData.firstName}
                                />
                            </Box>
                            <Box className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    aria-describedby="emailHelp"
                                    placeholder="Last Name"
                                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                    value={formData.lastName}
                                />
                            </Box>
                            <Box className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    value={formData.email}
                                />
                            </Box>
                            <Box className="mb-3 position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    name="password"
                                    placeholder="Create Password"
                                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    value={formData.password}
                                />
                                <button
                                    type="button"
                                    className="eye"
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        border: "none",
                                        background: "none"
                                    }}
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </button>
                            </Box>
                            <Box className="mb-3 position-relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    value={formData.confirmPassword}
                                />
                                <button
                                    type="button"
                                    className="eye"
                                    style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        border: "none",
                                        background: "none"
                                    }}
                                    onClick={toggleShowConfirmPassword}
                                >
                                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </button>
                            </Box>
                            <Box className="text-center">
                                <button type="submit" className="btn btn-success bbtn px-5 mb-5 w-100">Register</button>
                            </Box>
                            <Box id="emailHelp" className="form-text text-center mb-5 text-dark">
                                Already Registered? <Link to="/login" className="text-dark fw-bold puptext">Sign in to your Account</Link>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
