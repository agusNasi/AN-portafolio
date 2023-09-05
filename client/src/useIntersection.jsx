import { useEffect, useRef, useState } from 'react';

export default function useIntersection(opciones = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementoRef = useRef();

  useEffect(() => {
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, opciones);

    if (elemento) {
      observer.observe(elemento);
    }

    return () => {
      if (elemento) {
        observer.observe(elemento);
      }
    };
  }, []);

  return [elementoRef, isIntersecting];
}
