import { useState, useEffect, useRef } from 'react';
import './Scroll.css'

const Scroll =()=> {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const marqueeRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      const newScrollDirection = currentPosition < scrollPosition ? 'up' : 'down';
      setScrollPosition(currentPosition);
      setScrollDirection(newScrollDirection);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeWidth = marqueeElement.offsetWidth;
    const containerWidth = marqueeElement.parentElement.offsetWidth;
    const distanceToTravel = marqueeWidth - containerWidth;

    function updateMarqueePosition() {
      const newPosition = scrollDirection === 'up' ? -scrollPosition : scrollPosition - distanceToTravel;
      marqueeElement.style.transform = `translateX(${newPosition}px)`;
    }

    updateMarqueePosition();
    window.addEventListener('resize', updateMarqueePosition);
    return () => window.removeEventListener('resize', updateMarqueePosition);
  }, [scrollDirection, scrollPosition]);

  return (
    <div ref={marqueeRef} className="marquee">
      <p>This text will scroll in one direction or the other based on the user's scroll direction.</p>
    </div>
  );
}

export default Scroll