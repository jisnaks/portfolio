import React from 'react'
import data from '../Data/data.json'

function Skills() {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className='d-flex gap-5 m-5'>
            {
                data?.skills?.map((item) => (
                    <div key={item.id} className="card w-25 shadow p-2 mb-5 bg-body rounded">
                        <img src={item.src} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Skills
