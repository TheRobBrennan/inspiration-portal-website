const Header = () => {
  return (
    <header className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site name on the left, styled similar to SpaceX for demonstration purposes */}
        <h1 className="text-xl font-semibold font-sans">
          <a href="#section1" className="hover:text-gray-400">Inspiration Portal</a>
        </h1>

        {/* Right-aligned navigation, simplified to match the SpaceX aesthetic */}
        <nav>
          <ul className="flex space-x-10">
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
