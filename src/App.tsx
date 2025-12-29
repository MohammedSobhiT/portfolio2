import { Header } from "./components/header"
import { Hero } from "./components/Hero"
import { About } from "./components/about"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSecondaryBg, setIsSecondaryBg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => setIsDark(!isDark);
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const primaryColor = isDark ? "#191917" : "#f3f3f0";
      const secondaryColor = isDark ? "#f3f3f0" : "#191917";

      // Set initial color
      gsap.to(bgRef.current, { backgroundColor: primaryColor, duration: 0.4 });

      // Desktop behavior: Background transitions
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: "#skills-section",
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(bgRef.current, { backgroundColor: secondaryColor, duration: 0.4 });
            setIsSecondaryBg(true);
          },
          onLeave: () => {
            gsap.to(bgRef.current, { backgroundColor: primaryColor, duration: 0.4 });
            setIsSecondaryBg(false);
          },
          onEnterBack: () => {
            gsap.to(bgRef.current, { backgroundColor: secondaryColor, duration: 0.4 });
            setIsSecondaryBg(true);
          },
          onLeaveBack: () => {
            gsap.to(bgRef.current, { backgroundColor: primaryColor, duration: 0.4 });
            setIsSecondaryBg(false);
          },
        });
        mm.add("(min-width: 768px)", () => {
          ScrollTrigger.create({
            trigger: "#footer-section",
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              gsap.to(bgRef.current, { backgroundColor: secondaryColor, duration: 0.4 });
              setIsSecondaryBg(true);
            },
            onLeave: () => {
              gsap.to(bgRef.current, { backgroundColor: primaryColor, duration: 0.4 });
              setIsSecondaryBg(false);
            },
            onEnterBack: () => {
              gsap.to(bgRef.current, { backgroundColor: secondaryColor, duration: 0.4 });
              setIsSecondaryBg(true);
            },
            onLeaveBack: () => {
              gsap.to(bgRef.current, { backgroundColor: primaryColor, duration: 0.4 });
              setIsSecondaryBg(false);
            },
          });
        });
      });

      // Mobile behavior: Scrolling reveal for sections
      mm.add("(max-width: 767px)", () => {
        const sections = ["#about-section", "#skills-section", "#work-section", "#footer-section"];
        
        sections.forEach((section) => {
          gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              }
            }
          );
        });
      });

    });

    return () => ctx.revert();
  }, [isDark]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div 
        ref={bgRef} 
        className="fixed inset-0 z-[-1] transition-colors duration-500" 
        style={{ backgroundColor: isDark ? "#191917" : "#f3f3f0" }}
      />
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} isSecondaryBg={isSecondaryBg} />
        <div id="hero-section"><Hero /></div>
        <div id="about-section" className="relative"><About isDark={isDark} /></div>
        <div id="skills-section"><Skills isDark={isDark} /></div>
        <div id="work-section"><Work isDark={isDark} /></div>
        <div id="footer-section"><Footer isDark={isSecondaryBg} /></div>
      </div>
      <Analytics />
    </>
  );
}

export default App
