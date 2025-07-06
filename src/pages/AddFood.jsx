import  { useContext, useState } from "react";
import { AuthContext } from '../provider/AuthProvider';
import toast from "react-hot-toast";

const AddFood = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        quantity: "",
        location: "",
        expiry: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const foodData = {
            ...formData,
            donorName: user?.displayName || "Anonymous",
            donorEmail: user?.email,
            donorImage: user?.photoURL || "",
            status: "available",
        };

        console.log("Submitted Food:", foodData);
        // TODO: send foodData to your backend


        fetch('http://localhost:5000/foods',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(foodData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('food added successfully');
            
            
            };
            
        });


        // Clear form after submission
        // setFormData({
        //     name: "",
        //     image: "",
        //     quantity: "",
        //     location: "",
        //     expiry: "",
        //     notes: "",
        // });
 
    };

    return (
        <div className="max-w-4xl mx-auto p-4 mt-6">
            <div className="bg-base-100 shadow-xl p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">Add a Food Item</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="label"><span className="label-text">Food Name</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter food name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Food Image URL</span></label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Food Quantity</span></label>
                        <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                            placeholder="e.g. 2 Boxes, 3kg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Pickup Location</span></label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Dhaka, Banani"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Expired Date & Time</span></label>
                        <input
                            type="datetime-local"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label"><span className="label-text">Additional Notes</span></label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Optional notes"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex items-center gap-4 bg-base-200 p-4 rounded-xl mt-4">
                        <img
                            src={user?.photoURL || "Photo not found"}
                            alt="Donor"
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <p className="font-semibold">{user?.displayName}</p>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                        <div className="ml-auto text-sm font-medium text-success">Status: Available</div>
                    </div>

                    <div className="md:col-span-2 text-center mt-4">
                        <button type="submit" className="btn btn-primary w-full md:w-1/3">
                            Add Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
