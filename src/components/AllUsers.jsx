import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



export const AllUsers = () => {
    return(
        <Box class="container ">
        <Box class="row clearfix">
            <Box class="col-lg-4 col-md-12">
                <Box class="card single_post">
                    <Box class="header">
                        <h2><strong>Latest</strong> Post</h2>
                    </Box>
                    <Box class="body">
                        <h3 class="m-t-0 m-b-5"><Link to="">Apple Introduces Search Ads Basic</Link></h3>
                        <ul class="meta">
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</Link></li>
                        </ul>
                    </Box>
                    <Box class="body">
                        <Box class="img-post m-b-15">
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Awesome Image" />
                            <Box class="social_share">
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                            </Box>
                        </Box>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <Link to="" title="read more" class="btn btn-round btn-info">Read More</Link>
                    </Box>
                </Box>
            </Box>
            <Box class="col-lg-4 col-md-12">
                <Box class="card single_post">
                    <Box class="header">
                        <h2><strong>Popular</strong> Post</h2>
                    </Box>
                    <Box class="body">
                        <h3 class="m-t-0 m-b-5"><Link to="">Apple Introduces Search Ads Basic</Link></h3>
                        <ul class="meta">
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</Link></li>
                        </ul>
                    </Box>
                    <Box class="body">
                        <Box class="img-post m-b-15">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" />
                            <Box class="social_share">
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                            </Box>
                        </Box>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <Link to="" title="read more" class="btn btn-round btn-info">Read More</Link>
                    </Box>
                </Box>
            </Box>
            <Box class="col-lg-4 col-md-12">
                <Box class="card single_post">
                    <Box class="header">
                        <h2><strong>Most</strong> View</h2>
                    </Box>
                    <Box class="body">
                        <h3 class="m-t-0 m-b-5"><Link to="">Apple Introduces Search Ads Basic</Link></h3>
                        <ul class="meta">
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-account col-blue"></i>Posted By: John Smith</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-label col-amber"></i>Technology</Link></li>
                            <li><Link to="javascript:void(0);"><i class="zmdi zmdi-comment-text col-blue"></i>Comments: 3</Link></li>
                        </ul>
                    </Box>
                    <Box class="body">
                        <Box class="img-post m-b-15">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Awesome Image" />
                            <Box class="social_share">
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-facebook"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-twitter"></i></button>
                                <button class="btn btn-primary btn-icon btn-icon-mini btn-round"><i class="zmdi zmdi-instagram"></i></button>
                            </Box>
                        </Box>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <Link to="" title="read more" class="btn btn-round btn-info">Read More</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}