import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site name on the top left */}
        <h1 className="text-4xl text-white font-sans">
          Inspiration Portal
        </h1>

        {/* Navigation links right aligned */}
        <nav className="font-sans">
          <ul className="flex space-x-4">
            <li><a href="#section1" className="text-white hover:text-gray-300">Section 1</a></li>
            <li><a href="#section2" className="text-white hover:text-gray-300">Section 2</a></li>
            <li><a href="#section3" className="text-white hover:text-gray-300">Section 3</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
