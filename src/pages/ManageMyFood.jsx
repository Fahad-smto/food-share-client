import  { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loading from '../components/Loading'
 
import { AuthContext } from '../provider/AuthProvider';

const ManageMyFood = () => {
    const { user } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [editingFood, setEditingFood] = useState(null);
    const [loading, setLoading] = useState(true);
  console.log(myFoods);
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/foods/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyFoods(data);
                    setLoading(false);
                });
        }
    }, [user]);
    console.log(user);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete this food item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "The food item has been removed.", "success");
                            setMyFoods(myFoods.filter(food => food._id !== id));
                        }
                    });
            }
        });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedFood = {
            name: form.name.value,
            quantity: form.quantity.value,
            location: form.location.value,
            expiry: form.expiry.value,
            notes: form.notes.value
        };

        fetch(`http://localhost:5000/foods/${editingFood._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedFood),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Food updated successfully');
                    setMyFoods(myFoods.map(food =>
                        food._id === editingFood._id
                            ? { ...food, ...updatedFood }
                            : food
                    ));
                }
                document.getElementById('update_modal').close();
                setEditingFood(null);
            });
    };

    if (!user || loading) {
        return  <Loading></Loading>;
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Manage My Foods</h2>
            {myFoods.length === 0 ? (
                <p className="text-center">No food items found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myFoods.map(food => (
                        <div key={food._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={food.image} alt={food.name} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{food.name}</h2>
                                <p><strong>Quantity:</strong> {food.quantity}</p>
                                <p><strong>Location:</strong> {food.location}</p>
                                <p><strong>Expire:</strong> {new Date(food.expiry).toLocaleString()}</p>
                                <p><strong>Status:</strong> {food.status}</p>
                                <p><strong>Notes:</strong> {food.notes}</p>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => {
                                            setEditingFood(food);
                                            document.getElementById('update_modal').showModal();
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-error btn-sm"
                                        onClick={() => handleDelete(food._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal for Update */}
            <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Update Food</h3>
                    {editingFood && (
                        <form onSubmit={handleUpdateSubmit} className="space-y-3">
                            <strong className='ml-1'>Food Name</strong>
                            <input type="text" name="name" defaultValue={editingFood.name} className="input input-bordered w-full" required />
                            <strong className='ml-1'>Quantity</strong>
                            <input type="text" name="quantity" defaultValue={editingFood.quantity} className="input input-bordered w-full" required />
                            <strong className='ml-1'>Pickup Location</strong>
                            <input type="text" name="location" defaultValue={editingFood.location} className="input input-bordered w-full" required />
                            <strong className='ml-1'>Expire Date</strong>
                            <input type="datetime-local" name="expiry" defaultValue={editingFood.expiry} className="input input-bordered w-full" required />
                            <strong className='ml-1'>Notes</strong>
                            <textarea name="notes" defaultValue={editingFood.notes} className="textarea textarea-bordered w-full" rows={3}></textarea>

                            <div className="modal-action flex gap-2">
                                <button className="btn btn-primary" type="submit">Save</button>
                                <button className="btn btn-ghost" type="button" onClick={() => {
                                    document.getElementById('update_modal').close();
                                    setEditingFood(null);
                                }}>Cancel</button>
                            </div>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default ManageMyFood;
