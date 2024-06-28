import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("https://cookconnectapi.vercel.app/v1/login", { email, password });
      
      if (response.status === 200 && response.data.token) {
        const { token, user } = response.data;

        if (user && user.userID && user.firstName && user.lastName && user.email) {
          // Store user data and token in localStorage
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);

          setUser(user);

          setFlashMessage({
            type: "success",
            message: "Login Successful. Welcome Back!",
          });

          setTimeout(() => {
            window.location.href = "/recipe/my-recipe";
          }, 1000);
        } else {
          setFlashMessage({ type: "error", message: "Invalid user data received from the server." });
        }
      } else if (response.status === 400) {
        console.log("Error:", response.data);
        setFlashMessage({ type: "error", message: "All fields are required!" });
      } else {
        console.error("Error:", response.data);
        setFlashMessage({ type: "error", message: "An unexpected error occurred. Please try again later." });
      }
    } catch (error) {
      console.error("Login Error:", error);
      setFlashMessage({ type: "error", message: "Login failed. Please try again later." });
    }
  };

  const handleRegister = async (registrationData) => {
    try {
        const response = await axios.post("https://cookconnectapi.vercel.app/v1/register", registrationData);
        if (response.status === 201) {
            setFlashMessage({
                type: "success",
                message: "Registration successful! Please check your email to verify your account.",
            });
        }
    } catch (error) {
        console.error("Registration Error:", error);
        setFlashMessage({ type: "error", message: "Registration failed. Please try again later." });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <UserContext.Provider value={{ user, setUser, flashMessage, handleRegister, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
