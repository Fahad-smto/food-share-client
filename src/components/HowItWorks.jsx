import { FaHandHoldingHeart, FaUsers, FaBoxOpen } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section className="bg-base-100 py-16 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
                    How Food Sharing Works
                </h2>
                <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                    We make it simple to share your extra food with those in need. Here’s how the process works:
                </p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaBoxOpen className="text-4xl text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Step 1: List Food</h4>
                        <p className="text-gray-600 text-sm">
                            Post your extra or leftover food with quantity, pickup location, and expiry date.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Step 2: Request</h4>
                        <p className="text-gray-600 text-sm">
                            Community members can request available food items by providing a note and pickup time.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <FaHandHoldingHeart className="text-4xl text-green-500 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Step 3: Share & Help</h4>
                        <p className="text-gray-600 text-sm">
                            Approve requests and share your food — making a difference one meal at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
