import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks(){
    return(
        <ul className='right'>
            <li><NavLink to='/newproject'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating lighten-1'>AN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks