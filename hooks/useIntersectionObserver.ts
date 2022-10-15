import { useState, useEffect } from 'react';

export { useIO };

function useIO(containerRef: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackFunc = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return { isVisible };
}
