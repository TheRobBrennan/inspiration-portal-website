const Header = () => {
  return (
    // Added sticky top-0 and z-50 classes for sticky header behavior
    <header className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site name on the left, styled similar to SpaceX for demonstration purposes */}
        <h1 className="text-xl font-sans">
          <a href="#home" className="hover:text-gray-400">Inspiration Portal</a>
        </h1>

        {/* Right-aligned navigation, simplified to match the SpaceX aesthetic */}
        <nav>
          <ul className="flex space-x-10 font-sans">
            <li><a href="#section1" className="hover:text-gray-400">Section 1</a></li>
            <li><a href="#section2" className="hover:text-gray-400">Section 2</a></li>
            <li><a href="#section3" className="hover:text-gray-400">Section 3</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
