import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Students from "./Component/Students";
import "./App.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
