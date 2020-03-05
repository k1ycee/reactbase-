import React from 'react'


const ProjectSummary = ({project}) =>{
    return(
        <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{project.title}</span>
            <p>Posted by one useless child like that</p>
            <p className='grey-text'>On a day which the person didn't state</p>
        </div>
    </div>
    )
}

export default ProjectSummary