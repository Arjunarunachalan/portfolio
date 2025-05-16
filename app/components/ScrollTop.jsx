'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // optional, you can replace with any icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const heroHeight = hero.offsetHeight;
        setIsVisible(window.scrollY > heroHeight);
      } else {
        setIsVisible(window.scrollY > 300); // fallback
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#eb8317] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
