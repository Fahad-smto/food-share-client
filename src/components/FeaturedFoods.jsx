import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router";

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);
    

    useEffect(() => {
        fetch('https://food-share-server-pi.vercel.app/featured-foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(err => console.error("Failed to fetch featured foods:", err));
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">🍽️ Featured Foods</h2>

            {foods.length === 0 ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {foods.map((food) => (
                        <div key={food._id} className="card bg-base-100 shadow-lg rounded-xl hover:shadow-2xl transition-shadow">
                            <figure>
                                <img
                                    src={food.image || "https://i.ibb.co/mV2rjJVw/photo-not-found.jpg"}
                                    alt={food.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl text-primary">{food.name}</h3>
                                <p><strong>Quantity:</strong> {food.quantity}</p>
                                {/* <p><strong>Location:</strong> {food.location}</p>
                                <p><strong>Expires:</strong> {new Date(food.expiry).toLocaleDateString()}</p> */}
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className={`font-semibold ${food.status === "available" ? "text-green-600" : "text-red-500"}`}>
                                        {food.status}
                                    </span>
                                </p>
                                <p><strong>Donor:</strong> {food.donorName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Show All Button */}
            <div className="text-center mt-10">
                <Link to='/available_food'
                    
                    className="btn btn-outline btn-primary px-6 py-2 rounded-full"
                >
                    Show All Foods
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
