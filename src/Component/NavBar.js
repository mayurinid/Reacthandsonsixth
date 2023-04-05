import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
            <div className='nav'>
                    <h4><Link to="/">Home</Link></h4>
                    <h4><Link to="/Students" >Students</Link></h4>
                    <h4><Link to="/ContactUs">ContactUs</Link></h4>
                
            </div>



        
    )
}

export default NavBar