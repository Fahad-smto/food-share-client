import  { useState } from "react";

const AboutFoodSharing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., API call)
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className=" mx-auto p-8 bg-gray-50 min-h-screen rounded-md shadow-md">
      {/* About Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          About Our Website
        </h1>
        <p className="text-gray-800 leading-relaxed mb-4 text-lg">
          Welcome to <span className="font-semibold">FoodShare</span>, a
          community-driven platform dedicated to the beautiful act of sharing
          food. Our mission is to connect people who want to give and receive
          food, reduce food waste, and promote kindness through sharing meals.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4 text-lg">
          On FoodShare, you can find local food-sharing events, contribute by
          donating extra food, or simply learn how sharing meals can enrich
          lives and build stronger communities. We believe food is more than
          sustenance—it’s a bridge that brings people closer and fosters
          empathy.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg">
          Join us in spreading warmth, nourishment, and friendship one plate at
          a time.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          Contact Us
        </h2>
        {formSubmitted ? (
          <p className="text-center text-green-600 font-medium mb-4">
            Thank you for reaching out! We will get back to you soon.
          </p>
        ) : null}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default AboutFoodSharing;
