import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";




const Navigation = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/courses" element={<Courses />} />
                    <Route path="/taskify" element={<Taskify />} />
                    <Route path="/learn" element={<Learning />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/find" element={<Find />} />
                    <Route path="/mentee" element={<Mentee />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/mentor" element={<Mentor />} />
                    <Route path="/mentor-form" element={<MentorRegister />} /> */}
                </Routes>
           
        </>
    )
}


export default Navigation;