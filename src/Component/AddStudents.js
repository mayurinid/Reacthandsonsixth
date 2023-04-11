import React, { useContext } from 'react'
import ContextData from './ContextAPI'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const dataContext = useContext(ContextData)
  const navi = useNavigate()
  console.log(dataContext)
  const newStudent = {
    name: '',
    age: '',
    course: '',
    batch: '',
  }
  const handlechange = (e) => {
    newStudent[e.target.name] = e.target.value
  }
  const handleSubmit = () => {
    dataContext.entries.push(newStudent)
    console.log(dataContext)
    navi(-1)
  }
  return (
    <>
      <div className='addstuden'>
        <div><input name='name' onChange={handlechange} /></div>
        <div> <input name='age' onChange={handlechange} /></div>
        <div><input name='course' onChange={handlechange} /></div>
        <div> <input name='batch' onChange={handlechange} /></div>

      </div>
      <div className='buttons'>
        <div><button className="btn2" onClick={handleSubmit}>Cancel</button></div>
        <div><button className="btn1" onClick={handleSubmit}>Submit</button></div>
      </div>
    </>
  )
}

export default AddStudent