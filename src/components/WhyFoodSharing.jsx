import { FaHandHoldingHeart, FaLeaf, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaUtensils } from 'react-icons/fa';

const WhyFoodSharing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <img
                        src="/img2.jpg"
                        alt="Food Sharing"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-5">
                    <h2 className="text-4xl font-bold text-primary">Why Food Sharing Matters</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Every year, millions of tons of food go to waste while many go to bed hungry.
                        Our mission is to bridge that gap — one shared meal at a time. Whether you're a donor or a receiver,
                        you're part of a meaningful movement.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
                        <div className="bg-green-100 rounded-xl p-4 shadow">
                            <FaHandHoldingHeart className="text-3xl text-green-600 mx-auto mb-2" />
                            <p className="font-semibold text-green-800">Reduce Waste</p>
                        </div>
                        <div className="bg-orange-100 rounded-xl p-4 shadow">
                            <FaUsers className="text-3xl text-orange-600 mx-auto mb-2" />
                            <p className="font-semibold text-orange-800">Help Communities</p>
                        </div>
                        <div className="bg-yellow-100 rounded-xl p-4 shadow">
                            <FaLeaf className="text-3xl text-yellow-600 mx-auto mb-2" />
                            <p className="font-semibold text-yellow-800">Support Sustainability</p>
                        </div>
                    </div>

                    <Link to='/add_food' className="btn rounded-full text-white btn-success mt-6 flex items-center gap-2">
                        <FaUtensils className="text-lg" />
                        Start Sharing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhyFoodSharing;
