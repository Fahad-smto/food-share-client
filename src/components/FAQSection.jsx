import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "How can I donate food?",
        answer: "To donate, simply click on the 'Add Food' button, fill out the form with details like food type, quantity, and pickup location.",
    },
    {
        question: "Who can request food?",
        answer: "Anyone in need can request available food items by viewing details and clicking the 'Request' button.",
    },
    {
        question: "Is the food safe to consume?",
        answer: "All food items are donated with an expiry date, and we encourage donors to provide only fresh, safe items.",
    },
    {
        question: "Can I track my food requests?",
        answer: "Yes! You can go to the 'My Requests' section in your dashboard to see the status of all your requests.",
    },
];

const FAQSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                        <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-800">
                            {faq.question}
                            <FaChevronDown className="text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <p className="mt-3 text-gray-600">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
