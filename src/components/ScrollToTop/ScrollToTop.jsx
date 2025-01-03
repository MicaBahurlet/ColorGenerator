import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollButton } from './StyleScrollToTop';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muestra el botón solo si el usuario llega al final del DisplayColors
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <ScrollButton onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollButton>
    )
  );
};

export default ScrollToTop;
