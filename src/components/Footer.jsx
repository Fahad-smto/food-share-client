 
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700 px-10 py-12 shadow-inner">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                <div>
                    <h6 className="text-xl font-semibold mb-3 text-green-600">FoodKind</h6>
                    <p className="text-sm text-gray-600">
                        A community-powered platform to share extra food and reduce waste. Spread kindness, one meal at a time.
                    </p>
                </div>

                <div>
                    <h6 className="text-xl font-semibold mb-3 text-green-600">Quick Links</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-green-500 transition" href="#">Home</a></li>
                        <li><a className="hover:text-green-500 transition" href="#">About Us</a></li>
                        <li><a className="hover:text-green-500 transition" href="#">Contact</a></li>
                        <li><a className="hover:text-green-500 transition" href="#">Donate Food</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-xl font-semibold mb-3 text-green-600">Connect With Us</h6>
                    <div className="flex space-x-5 text-green-600 text-xl mt-2">
                        <a href="#" className="hover:text-green-400 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-green-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-green-400 transition">
                            <FaYoutube />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        &copy; {new Date().getFullYear()} FoodKind. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
