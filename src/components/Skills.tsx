import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiVite, 
  SiTailwindcss, 
  SiSass,
  SiShopify,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiNextdotjs,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiNodedotjs,
  SiFigma,
  SiFramer
} from "react-icons/si";
import { MdOutlineWaves } from "react-icons/md";
import { TbBrandThreejs } from "react-icons/tb";


interface SkillItem {
  name: string;
  icon: JSX.Element;
  category: 'frontend' | 'styling' | 'e-commerce' | 'version-control' |'backend' |'tools'|'testing'|'design';
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: SkillItem[] = [
    // Core Web
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      
      category: "frontend",
    },

    // Frameworks & Libraries
    {
      name: "React",
      icon: <SiReact />,
      
      category: "frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
     
      category: "frontend",
    },
    {
      name: "Three.js",
      icon: <TbBrandThreejs />,
      
      category: "frontend",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer />,
      
      category: "frontend",
    },
    {
      name: "GSAP",
      icon: <span>GSAP</span>,
     
      category: "frontend",
    },

    // Styling
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      
      category: "styling",
    },
    { name: "Sass", icon: <SiSass />,  category: "styling" },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      
      category: "styling",
    },


    // Backend & APIs
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
     
      category: "backend",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      
      category: "backend",
    },
    {
      name: "REST API",
      icon: <span>REST</span>,
 
      category: "backend",
    },

    // E-commerce
    {
      name: "Shopify",
      icon: <SiShopify />,

      category: "e-commerce",
    },
    {
      name: "Liquid",
      icon: <MdOutlineWaves />,
    
      category: "e-commerce",
    },

    // Tools & Version Control
    { name: "Git", icon: <SiGit />,  category: "tools" },
    { name: "GitHub", icon: <SiGithub />,  category: "tools" },
    { name: "Vite", icon: <SiVite />,  category: "tools" },
    {
      name: "Webpack",
      icon: <SiWebpack />,
   
      category: "tools",
    },

    // Testing
    { name: "Jest", icon: <SiJest />,  category: "testing" },
    {
      name: "React Testing",
      icon: <SiReact />,
    
      category: "testing",
    },

    // Design
    { name: "Figma", icon: <SiFigma />,  category: "design" },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'styling', name: 'Styling' },
    { id: 'backend', name: 'Backend' },
    { id: 'e-commerce', name: 'E-commerce' },
    { id: 'tools', name: 'Tools' },
    { id: 'testing', name: 'Testing' },
    { id: 'design', name: 'Design' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="md:h-dvh  md:pb-40  px-6">
      <h2 className="md:text-[12.5rem] text-[4rem] md:text-right leading-none  text-white mix-blend-difference mb-12">
        Skills.
      </h2>
      <div className="flex flex-col-reverse  items-center md:justify-center justify-between h-full">
        <div className="flex  flex-wrap justify-center items-center w-full mt-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`md:px-4 px-2 py-2 w-fit md:text-sm text-xs rounded-full transition-all text-white mix-blend-difference  cursor-pointer${
                activeCategory === category.id
                  ? "scale-120 font-bold  "
                  : " opacity-70 hover:opacity-100 "
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-11 grid-cols-5 items-center justify-center w-full gap-4 text-white h-fit">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-0.5  transition-all duration-300 mix-blend-difference "
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div
                className="text-4xl mb-2  transition-all duration-300"
                style={{
                  transform:
                    hoveredSkill === skill.name
                      ? "scale(1.15) translateY(-3px)"
                      : "scale(1)",
                }}
              >
                {skill.icon}
              </div>
              <span className="text-xs text-center transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

