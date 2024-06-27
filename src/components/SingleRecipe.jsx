import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/post.css";



export const SingleRecipe = () => {
    return(
        <Box className="container mt-5 pt-5 mx-auto">
            <Box className="row mx-auto">
                <Box className="col-md-8">
                    <Box className="post-content mx-auto">
                    <img src="https://www.bootdey.com/image/400x150/FFB6C1/000000" alt="post-image" className="img-responsive post-image" />
                    <Box className="post-container">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="profile-photo-md pull-left" />
                        <Box className="post-detail">
                        <Box className="user-info">
                            <h5>
                                <Link to="" className="profile-link">Fname Lname</Link> 
                                <span className="following">following</span>
                            </h5>
                            <p className="text-muted">Published a photo about 3 mins ago</p>
                        </Box>
                        <Box className="reaction">
                            <Link className="btn text-green"><i className="fa fa-thumbs-up"></i> 13</Link>
                            <Link className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</Link>
                        </Box>
                        <Box className="line-Boxider"></Box>
                        <Box className="post-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                        </Box>
                        <Box className="line-Boxider"></Box>
                        <Box className="post-comment">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" className="profile-photo-sm" />
                            <p><Link to="timeline.html" className="profile-link">Diana </Link><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </Box>
                        <Box className="post-comment">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="profile-photo-sm" />
                            <p><Link to="timeline.html" className="profile-link">John</Link> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </Box>
                        <Box className="post-comment">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" />
                        </Box>
                        </Box>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}