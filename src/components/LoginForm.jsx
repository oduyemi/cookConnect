import React, { useState, useContext} from "react";
import { UserContext } from "../UserContext";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export const LoginForm = () => {
  const { handleLogin, flashMessage } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [formSubmitted, setFormSubmitted] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true); 
        const success = await handleLogin(formData.email, formData.password);
        if (success) {
            const requestedPath = localStorage.getItem("requestedPath");
            window.location.href = requestedPath ? requestedPath : "/recipe/my-recipe";
          }
    };

    console.log("flashMessage:", flashMessage); 

    return(
        <Box className="container mt-5">
          <Box className="row">
            <Box className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Login Form</h2>
                  {formSubmitted && flashMessage && (
                    <div className={`alert ${flashMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                        {flashMessage.message}
                    </div>
                  )}
              <Box className="text-center mb-5 text-dark">Sign in to your account</Box>
              <Box className="card my-5">

                <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

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
                          name="email" 
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          onChange={handleChange} 
                          value={formData.email} 
                      />
                  </Box>
                  <Box className="mb-3">
                      <input   
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password" 
                          placeholder="password" 
                          onChange={handleChange} 
                          value={formData.password} 
                      />
                      <button 
                            type="button" 
                            className="eye" 
                            style={{ 
                              position: "absolute", 
                              right: "50px", 
                              top: "50%", 
                              transform: "translateY(-50%)", 
                              border: "none", 
                              background: "none" }}
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} 
                        </button>
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