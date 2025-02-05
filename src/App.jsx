import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import About from "./components/About";
import Profile from "./components/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addblog" element={<AddBlog/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;