import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = e=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category =form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);
        

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
            
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId) {
            Swal.fire({
                title:'success',
                text:'User Added Successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        }
    })

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form  name and quantity row */}
                <div className='md:flex gap-3'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee name" name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste */}
                <div className='md:flex gap-3'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Supplier Name" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details */}
                <div className='md:flex gap-3'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category name" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='mb-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                 </div> 
                 <input className='btn btn-block' type="submit" value="Add Coffee" />  
            </form>
        </div>
    );
};

export default AddCoffee;