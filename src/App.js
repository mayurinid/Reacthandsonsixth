import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Students from "./Component/Students";
import "./App.css"
import { useState } from "react";
import ContextData from "./Component/ContextAPI";
import UpdateStudents from "./Component/UpdateStudents";
import AddStudents from "./Component/AddStudents";

function App() {
  const [data1,setData1]=useState([
    {name:"prepbytes",age:"24",course:"MERN",batch:"jan"},
    {name:"prepbytes",age:"23",course:"MERN",batch:"jan"},
    {name:"prepbytes",age:"25",course:"MERN",batch:"jan"},
  ])
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Students" element={
            <ContextData.Provider value={{entries:data1,updateData:setData1}}>
            <Students/>
            </ContextData.Provider>}/>
            <Route path="/UpdateStudent" element={
            <ContextData.Provider value={{entries:data1,updateData:setData1}}>
            <UpdateStudents/>
            </ContextData.Provider>}/>
            <Route path="/AddStudent" element={
            <ContextData.Provider value={{entries:data1,updateData:setData1}}>
            <AddStudents/>
            </ContextData.Provider>}/>            
            <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
