import React, { useEffect, useState } from "react";

interface TickerProps {
  text?: string;
  speed?: number;
  repeats?: number;
  className?: string;
  textClassName?: string;
  separator?: string;
}

export const Ticker: React.FC<TickerProps> = ({
  text = "",
  speed = 0.5,
  repeats = 6,
  className = "",
  textClassName = "",
  separator = "•",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform based on scroll position
  const transform = `translateX(-${scrollPosition * speed}px)`;

  return (
    <div
      className={`w-full overflow-hidden py-4  ${className}`}
    >
      <div
        className="flex items-center whitespace-nowrap transition-transform duration-75 ease-linear"
        style={{ transform }}
      >
        {/* Repeat content multiple times for continuous scroll */}
        {[...Array(repeats)].map((_, i) => (
          <React.Fragment key={i}>
            {text.split(separator).map((segment, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span
                  className={` text-7xl font-light tracking-wide px-8 ${textClassName}`}
                >
                  {segment.trim()}
                </span>
                {idx < text.split(separator).length - 1 && (
                  <span className="text-red-500 text-5xl px-4">{separator}</span>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Demo wrapper with scrollable content

