import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css"
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-shelf-01813.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
            }
        })
  }
    return (
        <div className="add-service">
            <h2>Please a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
            <textarea {...register("description")} placeholder="description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("img")} placeholder="image" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;