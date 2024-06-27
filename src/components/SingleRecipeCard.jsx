import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../assets/css/post.css";

const SingleRecipeCard = ({ postImage, userImage, userName, timeAgo, postDesc, postIngredients, postInstructions, likes, comments }) => {
  return (
    <Box className="container mt-5 pt-5 mx-auto">
      <Box className="row mx-auto">
        <Box className="col-md-8">
          <Box className="post-content mx-auto">
            <img src={postImage} alt="post" className="img-responsive post-image" />
            <Box className="post-container">
              <img src={userImage} alt="user" className="profile-photo-md pull-left" />
              <Box className="post-detail">
                <Box className="user-info">
                  <h5>
                    <Link to="" className="profile-link">{userName}</Link>
                    <span className="following">following</span>
                  </h5>
                  <p className="text-muted">Published a photo about {timeAgo}</p>
                </Box>
                <Box className="reaction">
                  <Link className="btn text-green"><i className="fa fa-thumbs-up"></i> {likes}</Link>
                </Box>
                <Box className="line-Boxider"></Box>
                <Box className="post-text">
                  <p>{postDesc}</p>
                </Box>
                <Box className="line-Boxider"></Box>
                <Box className="post-ingredients">
                  <h5>Ingredients:</h5>
                  <ul>
                    {postIngredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </Box>
                <Box className="line-Boxider"></Box>
                <Box className="post-instructions">
                  <h5>Instructions:</h5>
                  <p>{postInstructions}</p>
                </Box>
                <Box className="line-Boxider"></Box>
                {comments.map((comment, index) => (
                  <Box className="post-comment" key={index}>
                    <img src={comment.userImage} alt="" className="profile-photo-sm" />
                    <p><Link to="timeline.html" className="profile-link">{comment.userName}</Link> {comment.text}</p>
                  </Box>
                ))}
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
  );
};

SingleRecipe.propTypes = {
  postImage: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  postDesc: PropTypes.string.isRequired,
  postIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  postInstructions: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      userImage: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SingleRecipeCard;
