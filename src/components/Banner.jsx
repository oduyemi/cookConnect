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
                    <h2 data-aos="fade-left" data-aos-delay="500">The food blog for hungry</h2>
                    <h4 data-aos="fade-left" data-aos-delay="700">One of the finest food and restaurant theme on the net, cleaniest and simplistic <span>wordpress theme, browse it and experience it</span></h4>
                    <Link className="btn btn-success" to="recipes.html" role="button" data-aos="fade-up" data-aos-delay="1000">Explore Recipes</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}