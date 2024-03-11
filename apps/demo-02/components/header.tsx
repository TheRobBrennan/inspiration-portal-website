'use client'
import { useState, useEffect } from 'react';

const Header = () => {
  // State to keep track of the currently active section
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    // Define your section IDs
    const sections = ['section1', 'section2', 'section3'];
    // Determine the current scroll position, adjusted to account for different viewports
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Find the section that matches the current scroll position
    const selectedSection = sections.find((section) => {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        return top <= scrollPosition && top + height > scrollPosition;
      }
      return false;
    });

    // Update the active section state
    if (selectedSection) {
      setActiveSection(selectedSection);
    } else {
      setActiveSection('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold font-sans">
          <a href="#home" className="nav-link">Inspiration Portal</a>
        </h1>

        <nav>
          <ul className="flex space-x-10">
            {['section1', 'section2', 'section3'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? 'underline' : ''}`}
                  style={{ textDecoration: activeSection === section ? 'underline' : 'none' }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );

};

export default Header;
