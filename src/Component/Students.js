import React, { useContext } from 'react'
import ContextData from './ContextAPI'
import {Link,useNavigate} from 'react-router-dom'


const Students = () => {
    const dataContext = useContext(ContextData)
    console.log(dataContext);
    const navi=useNavigate();
    return (
        <>
             { <div className='titlestudent'>
     <div className='studentdetails'>Students Details </div>
     <div><button className='btn' onClick={()=>{navi("/AddStudent")} }>Add new student</button></div>
     </div>
     }
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                        
                    </tr>
                </thead>
                {dataContext.entries.map((item, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><Link style={{color:'blue'}}to="/UpdateStudent" state={{data:index}} >Edit</Link></td>
                            </tr>
                                                    </tbody>
                    )
                })

                }
            </table>
       
         
        </>

    )
}

export default Students
