import React, { useContext } from 'react'
import ContextData from './ContextAPI'
import {useLocation, useNavigate} from "react-router-dom";
const UpdateStudent = () => {
    const dataContext = useContext(ContextData);
    const index = useLocation().state.data;
    const navi=useNavigate()
    console.log(index);
    console.log(dataContext)
    const updateData={
      name:dataContext.entries[index].name,
      age:dataContext.entries[index].age,
      course:dataContext.entries[index].course,
      batch:dataContext.entries[index].batch,
    }
    const handlechange=(e)=>{
updateData[e.target.name]=e.target.value
    }
    const handleSubmit=()=>{
      dataContext.entries[index]=updateData
      console.log(dataContext)
      navi('/Students')
   }
  return (
    <>
      <div className='addstuden'>
   <div> <input name='name' placeholder={dataContext.entries[index].name} onChange={handlechange}/></div>
  <div>  <input name='age' placeholder={dataContext.entries[index].name} onChange={handlechange}/></div>
   <div> <input name='course' placeholder={dataContext.entries[index].name} onChange={handlechange}/></div>
  <div>  <input name='batch' placeholder={dataContext.entries[index].name} onChange={handlechange}/></div>
     
   </div>
<div className='buttons'>
<div><button className="btn2" onClick={handleSubmit}>Cancel</button></div>
<div><button className="btn1" onClick={handleSubmit}>Update</button></div>
</div>
  </>
  )
}

export default UpdateStudent