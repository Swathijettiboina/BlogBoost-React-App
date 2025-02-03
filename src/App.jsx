import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import AddBlog from "./components/Addblog";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addblog" element={<AddBlog/>} />
          <Route path="/about" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;