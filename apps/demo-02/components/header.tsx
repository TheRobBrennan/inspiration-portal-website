'use client';
import { useState, useEffect } from 'react';
import { SECTIONS } from '../constants/constants'; // Adjust the path as necessary

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sectionIds = SECTIONS.map(section => section.id);
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    const selectedSection = sectionIds.find((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        return top <= scrollPosition && top + height > scrollPosition;
      }
      return false;
    });

    if (selectedSection) {
      setActiveSection(selectedSection);
    } else {
      setActiveSection('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-sans">
          <a href="/" className="">Inspiration Portal</a>
        </h1>

        <nav>
          <ul className="flex space-x-10 font-sans">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${activeSection === section.id ? 'active-text' : ''}`}
                >
                  {section.name}
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
