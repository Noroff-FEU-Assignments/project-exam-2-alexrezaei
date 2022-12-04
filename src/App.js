import Navigationbar from "./components/Navigationbar";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { Route, Routes } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import SinglePost from "./components/SinglePost";
import VisitProfile from "./components/profile/VisitProfile";
import Profile from "./components/profile/Profile";
import Postpage from "./pages/Postpage";
import AllPosts from "./components/AllPosts";
import AllProfiles from "./components/profiles/AllProfiles";
import AllProfilesPage from "./pages/AllProfilesPage";
import EditPost from "./components/EditPost";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/profiles" element={<AllProfilesPage />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="/profile" element={<Profilepage />}>
                <Route path="/profile/" element={<Profile />} />
                <Route path="/profile/:name" element={<VisitProfile />} />
            </Route>
            <Route path="/posts/:postId" element={<SinglePost />} />
            <Route path="/allposts" element={<Postpage />} />
        </Routes>
    );
}

export default App;
