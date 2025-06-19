import { ChartNoAxesCombined, Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#features" },
  { name: "Customer", path: "#customer" },
  { name: "Integrations", path: "#integrations" },
  { name: "Use Cases", path: "#usecases" },
  { name: "Testimonials", path: "#testimonials" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-3xl max-md:text-2xl font-bold text-white flex items-center">
            <ChartNoAxesCombined className="w-8 h-8 mr-2" />
            FlowMetrix
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-white/90 hover:text-white transition-colors relative group ${
                  location.pathname === item.path
                    ? "text-blue-400 font-bold"
                    : ""
                }`}
              >
                {item.name}
                <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <ModeToggle />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 rounded-lg shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`block text-white py-2 px-4 rounded-lg hover:bg-gray-700 ${
                    location.pathname === item.path ? "bg-gray-700" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
