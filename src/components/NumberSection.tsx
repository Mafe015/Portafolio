import React, { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';

interface NumberData {
  id: number;
  number: string;
  title1: string;
  title2: string;
}

const NumberSection: React.FC = () => {
  const numbers: NumberData[] = [
    {
      id: 1,
      number: "0",
      title1: "Años",
      title2: "de experiencia"
    },
    {
      id: 2,
      number: "0",
      title1: "Clientes",
      title2: "Mundiales"
    },
    {
      id: 3,
      number: "0",
      title1: "Clientes",
      title2: "Felices"
    },
    {
      id: 4,
      number: "1",
      title1: "Proyecto",
      title2: "Completado"
    },
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-4 z-10 mt-40 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center"
    >
      {numbers.map(({ id, number, title1, title2 }) => (
        <div key={id} className="mr-10 md:mt-0">
          <div className="flex items-center">
            <div className="text-4xl lg:text-6xl font-medium text-white flex items-center">
              <span>+</span>
              {isVisible ? (
                <CountUp
                  start={0}
                  end={parseInt(number)}
                  duration={2.5}
                  separator=","
                />
              ) : (
                "0"
              )}
            </div>
            <div className="pl-5 leading-snug text-sm lg:text-base font-light text-gray-300">
              {title1} <br />
              {title2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumberSection;