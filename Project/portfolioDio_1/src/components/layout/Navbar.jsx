import React, {useState, useEffect} from 'react'
import {Code, Menu, X} from 'lucide-react'
import {NAV_LINKS, PERSONAL_INFO} from '../../utils/constants'
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handlesScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handlesScroll);
    return () => window.removeEventListener('scroll', handlesScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <nav className={
      `fixed top-0 left-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
        ? 'bg-black/30 background-blur-lg'
        : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >

    </nav>
  )
}

export default Navbar