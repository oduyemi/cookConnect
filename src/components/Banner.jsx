import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



export const Banner = () => {
    return(
        <Box className="banner-home">
            <Box className="container">
                <Box className="row">
                    <Box className="col-sm-12">
                    <h1 data-aos="fade-left" data-aos-delay="300">CookConnect</h1><br/>
                    <h2 data-aos="fade-left" data-aos-delay="500">The recipe app for foodies</h2>
                    <h4 data-aos="fade-left" data-aos-delay="700" className="text-success">
                        The best web platform for foodies. The secret to great cooking. 
                        <span>Discover recipies, share yours. There's enough to go around!</span>
                    </h4>
                    <Link className="btn btn-success" to="recipes.html" role="button" data-aos="fade-up" data-aos-delay="1000">Explore Recipes</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}