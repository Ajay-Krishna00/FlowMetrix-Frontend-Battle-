import { useEffect, useState } from "react";
import "@/styles/CustomerLogos.css";

const set1 = [
  "Perplexity",
  "Supercell",
  "Monzo",
  "Raycast",
  "Retool",
  "Mercury",
];

const set2 = ["Ramp", "OpenAI", "Scale", "Boom", "Cash App", "Vercel"];

const Customer = () => {
  const [showSet1, setShowSet1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSet1((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="customer"
      className=" relative w-full h-[70vh] bg-[#0f0f0f] overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center mb-40">
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Trusted by the best
        </h2>
      </div>
      <div className="customer-container overflow-hidden">
        <div className={`logo-grid ${showSet1 ? "fade-in" : "fade-out"}`}>
          {set1.map((name) => (
            <div key={name} className="logo-item">
              {name}
            </div>
          ))}
        </div>
        <div
          className={`logo-grid absolute ${!showSet1 ? "fade-in" : "fade-out"}`}
        >
          {set2.map((name) => (
            <div key={name} className="logo-item">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
