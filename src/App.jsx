import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addblog" element={<AddBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;