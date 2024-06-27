import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



export const LoginForm = () => {
    return(
        <Box className="container">
          <Box className="row">
            <Box className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Login Form</h2>
              <Box className="text-center mb-5 text-dark">Sign in to your account</Box>
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
                          name="Username" 
                          aria-describedby="emailHelp"
                          placeholder="User Name"
                      />
                  </Box>
                  <Box className="mb-3">
                      <input   
                          type="password" 
                          className="form-control"
                          name="password" 
                          placeholder="password" 
                      />
                  </Box>
                  <Box className="text-center"><button type="submit" className="btn btn-success bbtn px-5 mb-5 w-100">Login</button></Box>
                  <Box id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                    Registered? <Link to="/register" className="text-dark fw-bold puptext"> Create an
                      Account</Link>
                  </Box>
                </form>
              </Box>

            </Box>
          </Box>
        </Box>
    )
}