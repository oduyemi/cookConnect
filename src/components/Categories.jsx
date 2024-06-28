import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/category.css";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import axios from "axios";

export const Categories = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/api/recipes"); 
        setRecipes(response.data.data); 
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.set-bg');
    
    elements.forEach((element) => {
      const bg = element.getAttribute('data-setbg');
      if (bg) {
        element.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
    <Box className="categories spad">
      <Box className="container">
        <Box className="row">
          {recipes.map((recipe, index) => (
            <Box key={recipe._id} className={`col-lg-3 col-md-6 col-sm-6 ${index === 0 ? "categories__item--large" : ""}`}>
              <Box className="categories__item set-bg" style={{ backgroundImage: `url(${recipe.img})` }}>
                <Box className="categories__hover__text">
                  <h5>{recipe.title}</h5>
                  <p>{recipe.ingredients.length} ingredients</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
