import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../UserContext";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Recipe from "../pages/Recipe";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import RecipePost from "../pages/RecipePost";
import MyRecipe from "../pages/MyRecipe";
import Verify from "../pages/Verify";
import Logout from "../pages/Logout";




const Navigation = () => {
    return(
        <UserProvider>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/recipe" element={<Recipe />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/recipe/new" element={<RecipePost />} />
                    <Route path="/recipe/my-recipe" element={<MyRecipe />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/logout" element={<Logout />} />
                    
                </Routes>
           
        </UserProvider>
    )
}


export default Navigation;