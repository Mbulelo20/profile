import React, { useEffect } from 'react'

const ProjectItem = ({project}) => {

    useEffect(() => {
        console.log('item', project)
    })
  return (
    <div className="col-md-4" style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr'}}>
        <div class="card text-center" style={{transition: '0.7s', width: '300px'}}>
            <img  src={project.image} alt="yourphoto" style={{width: '90%'}}/>
            <div class="container" style={{padding: '2px, 16px'}}>
                
            </div>  
        </div>
    </div>
  )
}

export default ProjectItem