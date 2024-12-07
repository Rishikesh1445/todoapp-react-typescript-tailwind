import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "Groceries", path: "/groceries" },
    { name: "Calendar", path: "/calendar" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen rounded-tr-2xl rounded-br-2xl bg-blue-800 transition-all duration-300 ${
        isOpen ? "w-60" : "w-12"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="flex flex-col items-start space-y-4 p-4">
        {tabs.map((tab, index) => (
          <li key={index} className="group relative w-full">
            <NavLink
              to={tab.path}
              className="flex items-center space-x-2 p-2 text-white rounded-md hover:bg-opacity-40 hover:bg-white"
            >
              <span
                className={`font-mono transition-all duration-400 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {tab.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
