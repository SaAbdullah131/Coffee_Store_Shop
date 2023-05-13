import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your coffee has been deleted',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Available: {quantity}pics</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3 ">
                        <button className="btn  rounded-full">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn rounded-xl">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 rounded-xl">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;