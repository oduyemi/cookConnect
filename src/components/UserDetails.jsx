import React from "react";
import { Box } from "@mui/material";
// import { Link } from "react-router-dom";



export const UserDetails = () => {
    return(
        <Box className="container mt-5">
            <Box className="row d-flex justify-content-center">
                <Box className="col-md-7">
                    <Box className="card p-3 py-4">
                        <Box className="text-center">
                            <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" alt="dp" className="rounded-circle" />
                        </Box>
                        <Box className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                            <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                            <span>UI/UX Designer</span>
                            
                            <Box className="px-4 mt-1">
                                <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </Box>
                            <ul className="social-list">
                                <li>20 recipies<i className="fa fa-facebook"></i></li>&emsp;
                                <li>link to view recipes<i className="fa fa-dribbble"></i></li>
                            </ul>
                            <Box className="buttons mt-3">
                                <button className="btn btn-success bbtn px-4 ms-3">Follow</button>
                            </Box>
                        </Box>                        
                    </Box>   
                </Box>
            </Box>
        </Box>
    )
}