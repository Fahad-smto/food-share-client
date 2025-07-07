import { useEffect, useState } from "react";

const steps = [
  { id: 1, title: "Food Donated" },
  { id: 2, title: "Food Collected" },
  { id: 3, title: "Food Sorted" },
  { id: 4, title: "Food Distributed" },
  { id: 5, title: "Community Impact" },
];

const FoodJourneySimple = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-md text-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Food Sharing Journey</h2>
      <p className="text-lg font-medium text-green-600 mb-4">{steps[active].title}</p>
      <div className="flex justify-center space-x-3">
        {steps.map((step, i) => (
          <div
            key={step.id}
            className={`w-4 h-4 rounded-full ${
              i === active ? "bg-green-600" : "bg-gray-300"
            } transition-colors duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FoodJourneySimple;
