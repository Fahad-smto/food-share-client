

const FoodCard = ({ food }) => {
    const { name, image, quantity, location } = food;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold text-primary">{name}</h2>
                <p className="text-gray-600">
                    <span className="font-medium text-black">Quantity:</span> {quantity}
                </p>
                <p className="text-gray-600">
                    <span className="font-medium text-black">Location:</span> {location}
                </p>
                <div className="mt-4">
                    <button className="btn btn-outline btn-primary w-full rounded-full">
                        Request Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
