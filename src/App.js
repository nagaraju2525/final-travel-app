import "./App.css";
import Body from "./Body";
import BodyTwo from "./BodyTwo";
import ImageInfo from "./components/ImageInfo";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Sample from "./Sample";
import Slide from "./Slide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/mainpage" element={<Home />} />
          <Route exact path="/submit" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
