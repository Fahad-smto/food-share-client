import  { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { AuthContext } from '../provider/AuthProvider';

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  const handleRequest = () => {
    const requestData = {
      ...food,
      requesterEmail: user?.email,
      requestDate: new Date().toISOString(),
      additionalNote: note,
      status: "requested",
    }

    fetch("http://localhost:5000/request-food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Change status of food
          fetch(`http://localhost:5000/foods/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "requested" }),
          });

          toast.success("Food requested successfully");
          document.getElementById("request_modal").close();
        }
      });
  };

  if (!food) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-base-100 rounded-xl shadow p-6 space-y-4">
        <img src={food?.image} alt={food.name} className="w-full h-64 object-cover rounded-xl" />
        <h2 className="text-2xl font-bold text-primary">{food.name}</h2>
        <p><strong>Quantity:</strong> {food.quantity}</p>
        <p><strong>Location:</strong> {food.location}</p>
        <p><strong>Expires:</strong> {new Date(food.expiry).toLocaleString()}</p>
        <p><strong>Donator:</strong> {food.donorName} ({food.donorEmail})</p>
        <p><strong>Status:</strong> <span className="text-success">{food.status}</span></p>
        <p><strong>Notes:</strong> {food.notes}</p>

        {food.status === "available" ? (
          <button
            className="btn btn-primary w-full"
            onClick={() => document.getElementById("request_modal").showModal()}
          >
            Request
          </button>
        ) : (
          <button className="btn btn-disabled w-full">Already Requested</button>
        )}
      </div>

      {/* ✅ Modal */}
      <dialog id="request_modal" className="modal">
        <div className="modal-box max-w-lg m-5">
          <h3 className="font-bold text-lg mb-4">Request Food</h3>
          <div className="space-y-2 text-sm">
            <input className="input input-bordered w-full" value={food.name} readOnly />
            <input className="input input-bordered w-full" value={food.image} readOnly />
            <input className="input input-bordered w-full" value={food._id} readOnly />
            <input className="input input-bordered w-full" value={food.donorEmail} readOnly />
            <input className="input input-bordered w-full" value={food.donorName} readOnly />
            <input className="input input-bordered w-full" value={user?.email} readOnly />
            <input
              className="input input-bordered w-full"
              value={new Date().toLocaleString()}
              readOnly
            />
            <input className="input input-bordered w-full" value={food.location} readOnly />
            <input
              className="input input-bordered w-full"
              value={new Date(food.expiry).toLocaleString()}
              readOnly
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Additional Notes (Optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button className="btn btn-outline">Cancel</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRequest}
              >
                Request
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FoodDetails;
