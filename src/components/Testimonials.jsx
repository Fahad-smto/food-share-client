import { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Johny White",
    text: "Sharing food spreads kindness and brings people closer, creating bonds beyond words. It nourishes both the body and the soul through generosity and connection."
  },
  {
    name: "Sarah Johnson",
    text: "Sharing food is a beautiful way to show care and build relationships. It creates moments of joy and unity, reminding us that generosity feeds not just hunger but also the heart."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#fbf9f5] py-16 text-center relative">
      {/* Background image (optional) */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url('/mango-leaf.png')] bg-no-repeat bg-left opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <FaQuoteLeft className="text-4xl text-gray-600 mx-auto mb-4" />

        <h3 className="font-bold text-lg mb-4">{testimonials[index].name}</h3>
        <p className="text-gray-700 text-lg leading-relaxed px-4">
          {testimonials[index].text}
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-lg hover:bg-black hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-lg hover:bg-black hover:text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
