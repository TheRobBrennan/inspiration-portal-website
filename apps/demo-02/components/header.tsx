const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-end items-center">
        {/* Font-sans class is applied here to ensure text uses the sans-serif font family */}
        <nav className="font-sans">
          <ul className="flex space-x-4">
            {/* Example sections in the header */}
            <li><a href="#section1" className="hover:text-gray-300">Section 1</a></li>
            <li><a href="#section2" className="hover:text-gray-300">Section 2</a></li>
            <li><a href="#section3" className="hover:text-gray-300">Section 3</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
