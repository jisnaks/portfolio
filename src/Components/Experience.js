import React from 'react';
import data from '../Data/data.json';

function Experience() {
    return (
        <div id="experience" className='my-5'>
            <h1>Experience</h1>
            <div className='d-flex gap-5 m-5 '>
            {
                data?.experience?.map((item) => (
                    <div key={item.id} className="card w-25 shadow p-3 mb-5  rounded" style={{background:'#f0fbff'}} >
                        <img src={item.src} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        
    );
}

export default Experience;
