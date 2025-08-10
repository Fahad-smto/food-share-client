import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
   
  };

  return (
    <section className="bg-green-50 p-8 rounded-lg  mt-10 mb-10  mx-auto shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-green-700 mb-6 text-center">
        Get the latest updates, food sharing tips, and community news directly
        in your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {submitted && (
          <p className="text-green-600 font-medium text-center">
            Thank you for subscribing!
          </p>
        )}
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSubscription;
