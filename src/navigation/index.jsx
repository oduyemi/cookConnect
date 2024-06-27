import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Users from "../pages/Users";




const Navigation = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/recipe" element={<Recipe />} />
                    <Route path="/users" element={<Users />} />
                    
                </Routes>
           
        </>
    )
}


export default Navigation;