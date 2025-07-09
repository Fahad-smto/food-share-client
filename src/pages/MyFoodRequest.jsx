import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://food-share-server-pi.vercel.app/request-food/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setRequests(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return  <Loading></Loading>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Food Requests</h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">You have no food requests yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <div key={request._id} className="card bg-base-100 shadow-xl rounded-2xl">
              <figure>
                <img src={request.image} alt={request.name} className="h-48 w-full object-cover rounded-t-2xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{request.name}</h2>
                <p><strong>Requested By:</strong> {request.requesterEmail}</p>
                <p><strong>Pickup Location:</strong> {request.location}</p>
                <p><strong>Expire Date:</strong> {new Date(request.expiry).toLocaleDateString()}</p>
                <p><strong>Request Date:</strong> {new Date(request.requestDate).toLocaleString()}</p>
                <p><strong>Note:</strong> {request.additionalNote || "No note provided"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
