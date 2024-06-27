import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/category.css";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";

export const Categories = () => {
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
          <Box className="col-lg-3 col-md-6 col-sm-6">
            <Box className="categories__item set-bg" data-setbg={cat1}>
              <Box className="categories__hover__text">
                <h5>User1</h5>
                <p>5 recipies</p>
              </Box>
            </Box>
          </Box>
          <Box className="col-lg-3 col-md-6 col-sm-6">
            <Box className="categories__item set-bg" data-setbg={cat2}>
              <Box className="categories__hover__text">
                <h5>User2</h5>
                <p>2 recipes</p>
              </Box>
            </Box>
          </Box>
          <Box className="col-lg-3 col-md-6 col-sm-6">
            <Box className="categories__item set-bg" data-setbg={cat3}>
              <Box className="categories__hover__text">
                <h5>User3</h5>
                <p>10 recipes</p>
              </Box>
            </Box>
          </Box>
          <Box className="col-lg-3 col-md-6 col-sm-6">
            <Box className="categories__item set-bg" data-setbg={cat4}>
              <Box className="categories__hover__text">
                <h5>User4</h5>
                <p>8 recipes</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="categories__post">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-8 col-md-8">
              <Box className="categories__post__item categories__post__item--large">
                <Box className="categories__post__item__pic set-bg" data-setbg={require("../assets/images/r3.jpg")}>
                  <Box className="post__meta">
                    <h4>08</h4>
                    <span>Aug</span>
                  </Box>
                </Box>
                <Box className="categories__post__item__text">
                  <ul className="post__label--large">
                    <li>First name</li>
                    <li>Last name</li>
                  </ul>
                  <h3>
                    <Link to="">
                      Recipe Title
                    </Link>
                  </h3>
                  <ul className="post__widget">
                    <li>
                      follow
                    </li>
                    <li>Likes</li>
                    <li>20 Comments</li>
                  </ul>
                  <p>
                    Recipe Description: Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint ...
                  </p>
                </Box>
              </Box>
              <Box className="row">
                <Box className="col-lg-6 col-md-6 col-sm-6">
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic small__item set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <span className="post__label">fname lname</span>
                      <h3>
                        <Link to="#">
                          Recipe Title
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          follow
                        </li>
                        <li>Likes</li>
                      <li>20 Comments</li>
                      </ul>
                      <p>
                        Recipe Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                      </p>
                    </Box>
                  </Box>
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic set-bg" data-setbg={require("../assets/images/r1.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <ul className="post__label--large">
                        <li>First name</li>
                        <li>Last name</li>
                      </ul>
                      <h3>
                        <Link to="#">
                          Recipe Title
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          follow
                        </li>
                        <li>Likes</li>
                        <li>20 Comments</li>
                      </ul>
                      <p>
                        Recipe Title: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                      </p>
                    </Box>
                  </Box>
                  <Box className="categories__post__item__plain set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                    <Box className="categories__post__item__text">
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                      <ul className="post__label--large">
                        <li>fname</li>
                        <li>lname</li>
                      </ul>
                      <h3>
                        <Link to="#">
                          Recipe Title
                        </Link>
                      </h3>
                      <Box className="post__social">
                        <span>Share</span>
                        <Link to="#">
                          <i className="fa fa-facebook"></i> <span>82</span>
                        </Link>
                        <Link to="#">
                          <i className="fa fa-twitter"></i> <span>24</span>
                        </Link>
                        <Link to="#">
                          <i className="fa fa-envelope-o"></i> <span>08</span>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic smaller__large set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <span className="post__label">fname lnamr</span>
                      <h3>
                        <Link to="#">
                          Title
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          follow
                        </li>
                        <li>Likes</li>
                        <li>20 Comments</li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
                <Box className="col-lg-6 col-md-6 col-sm-6">
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic set-bg" data-setbg={require("../assets/images/r3.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <span className="post__label">fname lname</span>
                      <h3>
                        <Link to="#">
                          Title
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                         follow
                        </li>
                          <li>Likes</li>
                          <li>20 Comments</li>
                      </ul>
                      <p>
                        Recipe Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                      </p>
                    </Box>
                  </Box>
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic small__item set-bg" data-setbg={require("../assets/images/r1.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <span className="post__label">Healthy</span>
                      <h3>
                        <Link to="#">
                          The 8 Best Blenders For Smoothies, According To Healthy Foodies
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          follow
                        </li>
                        <li>Likes</li>
                    <li>20 Comments</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                      </p>
                    </Box>
                  </Box>
                  <Box className="categories__post__item">
                    <Box className="categories__post__item__pic smaller__large set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                      <Box className="post__meta">
                        <h4>08</h4>
                        <span>Aug</span>
                      </Box>
                    </Box>
                    <Box className="categories__post__item__text">
                      <ul className="post__label--large">
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h3>
                        <Link to="#">
                          Our Best Tips for Cooking Flawless, Perfect Pork
                        </Link>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          follow
                        </li>
                        <li>Likes</li>
                    <li>20 Comments</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-4 col-md-4">
              <Box className="categories__post__item">
                <Box className="categories__post__item__pic smaller__large set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                  <Box className="post__meta">
                    <h4>08</h4>
                    <span>Aug</span>
                  </Box>
                </Box>
                <Box className="categories__post__item__text">
                  <ul className="post__label--large">
                    <li>Vegan</li>
                    <li>Desserts</li>
                  </ul>
                  <h3>
                    <Link to="#">
                      The Best Grass Stain Remover Is Already In Your Pantry
                    </Link>
                  </h3>
                  <ul className="post__widget">
                    <li>
                      follow
                    </li>
                    <li>Likes</li>
                    <li>20 Comments</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                  </p>
                </Box>
              </Box>
              <Box className="categories__post__item__plain set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                <Box className="categories__post__item__text">
                  <Box className="post__meta">
                    <h4>08</h4>
                    <span>Aug</span>
                  </Box>
                  <ul className="post__label--large">
                    <li>fname</li>
                    <li>lname</li>
                  </ul>
                  <h3>
                    <Link to="#">
                      title
                    </Link>
                  </h3>
                  <Box className="post__social">
                    <span>Share</span>
                    <Link to="#">
                      <i className="fa fa-facebook"></i> <span>82</span>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i> <span>24</span>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-envelope-o"></i> <span>08</span>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box className="categories__post__item">
                <Box className="categories__post__item__pic small__item set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                  <Box className="post__meta">
                    <h4>08</h4>
                    <span>Aug</span>
                  </Box>
                </Box>
                <Box className="categories__post__item__text">
                  <span className="post__label">Healthy</span>
                  <h3>
                    <Link to="#">
                      The 8 Best Blenders For Smoothies, According To Healthy Foodies
                    </Link>
                  </h3>
                  <ul className="post__widget">
                    <li>
                      by <span>Admin</span>
                    </li>
                    <li>Likes</li>
                    <li>20 Comments</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                  </p>
                </Box>
              </Box>
              <Box className="categories__post__item">
                <Box className="categories__post__item__pic smaller__large set-bg" data-setbg={require("../assets/images/r2.jpg")}>
                  <Box className="post__meta">
                    <h4>08</h4>
                    <span>Aug</span>
                  </Box>
                </Box>
                <Box className="categories__post__item__text">
                  <ul className="post__label--large">
                    <li>Vegan</li>
                    <li>Desserts</li>
                  </ul>
                  <h3>
                    <Link to="#">
                      The Best Grass Stain Remover Is Already In Your Pantry
                    </Link>
                  </h3>
                  <ul className="post__widget">
                    <li>
                      by <span>Admin</span>
                    </li>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida...
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
