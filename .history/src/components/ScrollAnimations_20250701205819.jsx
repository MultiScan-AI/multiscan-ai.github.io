import React, { useEffect } from 'react';

// This component adds scroll-based animations to the site
const ScrollAnimations = () => {
  useEffect(() => {
    // Helper function to check if element is in viewport
    const isInViewport = (element, offset = 150) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - offset) && 
        rect.bottom >= offset
      );
    };

    // Animate elements when they come into view
    const animateOnScroll = () => {
      // Fade-in animations
      document.querySelectorAll('.scroll-fade-in').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Slide-up animations
      document.querySelectorAll('.scroll-slide-up').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Slide-in-right animations
      document.querySelectorAll('.scroll-slide-right').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Slide-in-left animations
      document.querySelectorAll('.scroll-slide-left').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Scale animations
      document.querySelectorAll('.scroll-scale').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Rotate animations
      document.querySelectorAll('.scroll-rotate').forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
        }
      });

      // Staggered items
      document.querySelectorAll('.stagger-group').forEach(group => {
        if (isInViewport(group, 100)) {
          const items = group.querySelectorAll('.stagger-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animated');
            }, 100 * index);
          });
        }
      });

      // Parallax effect for background elements
      document.querySelectorAll('.parallax-bg').forEach(element => {
        const scrollPosition = window.scrollY;
        const speed = element.getAttribute('data-speed') || 0.2;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    // Run once on load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ScrollAnimations;
