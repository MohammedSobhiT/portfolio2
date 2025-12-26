import { useRef, useEffect, useState } from "react";

export const Skills = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const skills = [
    "JavaScript / TypeScript",
    "React / Vite",
    "Tailwind CSS / Sass",
    "Shopify / Liquid",
    "Git / GitHub",
  ];

useEffect(() => {
  const handleScroll = () => {
    if (!listRef.current) return;

    const items = Array.from(listRef.current.children);

    for (let i = 0; i < items.length; i++) {
      const rect = items[i].getBoundingClientRect();

      const isInView =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.4;

      if (isInView) {
        setVisibleIndex((prev) => (prev === i ? prev : i));
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className=" py-40 px-6 flex items-start gap-6 bg-[#191917]">
      <h1 className="skills-title text-5xl text-[#f3f3f0] rotate-180 ">
        Skills.
      </h1>

      <ul ref={listRef} className="text-7xl flex flex-col gap-8">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={` transition-all duration-700 ease-out font-bold ${
              visibleIndex === index
                ? "text-[#f3f3f0] scale-105 "
                : "text-[#f3f3f05f]"
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
