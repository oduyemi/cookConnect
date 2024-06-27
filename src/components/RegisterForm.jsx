import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



export const RegisterForm = () => {
    return(
        <Box className="container mt-14">
    <Box className="row">
      <Box className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Registration Form</h2>
        <Box className="text-center mb-5 text-dark">Join our community</Box>
        <Box className="card my-5">

          <form className="card-body cardbody-color p-lg-5">

            <Box className="text-center">
                <img src={require("../assets/images/signin.jpg")}
                    width="200px" alt="profile"
                    className="rounded-circle"
                />
            </Box>

            <Box className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    name="firstName" 
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                />
            </Box>
            <Box className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    name="lastName" 
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                />
            </Box>
            <Box className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    aria-describedby="emailHelp"
                    placeholder="Email"
                />
            </Box>
            <Box className="mb-3">
                <input   
                    type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Create Password" 
                />
            </Box>
            <Box className="mb-3">
                <input   
                    type="password" 
                    className="form-control"
                    name="confirmPassword" 
                    placeholder="Confirm Pssword" 
                />
            </Box>
            <Box className="text-center"><button type="submit" className="btn btn-success bbtn px-5 mb-5 w-100">Register</button></Box>
            <Box id="emailHelp" className="form-text text-center mb-5 text-dark">Already 
              Registered? <Link to="/login" className="text-dark fw-bold puptext"> Sign in 
                to your Account</Link>
            </Box>
          </form>
        </Box>

      </Box>
    </Box>
  </Box>
    )
}