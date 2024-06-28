import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext"; 
import { Box } from "@mui/material";
import axios from "axios";

export const CreateRecipe = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [img, setImg] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { user } = useContext(UserContext); 
    const [flashMessage, setFlashMessage] = useState(null);

    useEffect(() => {
        if (!user) {
            setFlashMessage({
                type: "error",
                message: "You need to login first!",
            });
            window.location.href = "/admin/signin";
        }
    }, [user]);

    const handleImageUpload = (e) => {
        setImg(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!user) {
            setError("You must be logged in to create a recipe");
            return;
        }
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("ingredients", ingredients);
        formData.append("instructions", instructions);
        formData.append("author", user.userID);
        formData.append("img", img);

        // Log the form data for debugging
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Authentication token not found. Please log in.");
                return;
            }
    
            const response = await axios.post("https://cookconnectapi.vercel.app/v1/recipes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });
    
            if (response.status === 201) {
                setSuccess("Recipe created successfully!");
                setError("");
                // Optionally clear form inputs
                setTitle("");
                setDesc("");
                setIngredients("");
                setInstructions("");
                setImg(null);
            } else {
                setError("Failed to create recipe");
                setSuccess("");
            }
        } catch (error) {
            if (error.response) {
                setError(`Error creating recipe: ${error.response.data.message}`);
            } else {
                setError(`Error creating recipe: ${error.message}`);
            }
            setSuccess("");
        }
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    };

    return (
        <>
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-8 col-md-offset-2 mx-auto mt-5 pt-5">
                        <h1 className="animate_pulse mb-3">Add New Recipe</h1>
                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}
                        <form onSubmit={handleSubmit}>
                            <Box className="form-group has-error">
                                <label htmlFor="img">Food Image</label>
                                <input type="file" className="form-control" name="img" onChange={handleImageUpload} required />
                            </Box>
                            <Box className="form-group mb-3">
                                <label htmlFor="title">Title <span className="require">*</span></label>
                                <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </Box>
                            
                            <Box className="form-group mb-3">
                                <label htmlFor="desc">Description <span className="require">*</span></label>
                                <textarea rows="5" className="form-control" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
                            </Box>
                            <Box className="form-group mb-3">
                                <label htmlFor="ingredients">Ingredients <span className="require">*</span></label>
                                <textarea rows="3" className="form-control" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
                            </Box>
                            <Box className="form-group mb-3">
                                <label htmlFor="instructions">Cooking Instructions <span className="require">*</span></label>
                                <textarea rows="5" className="form-control" name="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                            </Box>
                            <Box className="form-group mt-3 text-center">
                                <button type="submit" className="btn btn-lg btn-success bbtn">
                                    Create
                                </button> &emsp;
                                <button type="button" className="btn btn-lg btn-default" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
