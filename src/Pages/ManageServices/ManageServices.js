import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://blooming-shelf-01813.herokuapp.com/services')
            .then(res => res.json())
        .then(data =>setServices(data))  
    }, [])
    const handleDelete = id => {
        const url = `https://blooming-shelf-01813.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
                
            })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(services => <div key={services._id}>
                    <h3>{services.name}</h3>
                    <button onClick={ () => handleDelete(services._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;