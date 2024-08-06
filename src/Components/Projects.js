import React from 'react'
import data from '../Data/data.json'

function Projects() {
  return (
    <div id="project">
            <h1 className='my-5'>My projects</h1>
            <div className='d-flex gap-5 m-5'>
            {
                data?.projects?.map((item) => (
                    <div key={item.id} className="card w-25 shadow p-3 mb-5  rounded mx-auto mt-5" style={{background:'#f0fbff'}} >
                        <img src={item.src} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Skills used: {item.skills}</p>
                            <p className="card-text">Description:{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        
  )
}

export default Projects
