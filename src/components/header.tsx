import StaggeredMenu from "./StaggeredMenu";
import { IoInvertMode } from "react-icons/io5";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  isSecondaryBg: boolean;
}

export const Header = ({ isDark, toggleTheme, isSecondaryBg }: HeaderProps) => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about Me", link: "#about" },
    { label: "Skills", ariaLabel: "See My skills", link: "#skills" },
    { label: "Work", ariaLabel: "View My work", link: "#work" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#footer" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/MohammedSobhiT" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/mohammed-sobhi/" },
  ];

  const darkColor = "#191917";
  const lightColor = "#f3f3f0";

  // Match App background logic: primary/secondary swap based on isDark and scroll.
  const isBackgroundDark = (!isDark && isSecondaryBg) || (isDark && !isSecondaryBg);

  const menuButtonColor = isBackgroundDark ? lightColor : darkColor;
  const openMenuButtonColor = isBackgroundDark ? darkColor : lightColor; // Toggle inverse
  // Note: StaggeredMenu "colors" prop controls pre-layers.
  
  const panelBg = isDark ? darkColor : lightColor;
  const itemText = isDark ? lightColor : darkColor;

  return (
    <header className="  z-9999  relative w-full pointer-events-none">
          <div className="absolute top-14 md:top-4 left-6 md:left-1/2 transform -translate-x-1/2 text-center pointer-events-auto z-50 mix-blend-difference">
             <button 
                onClick={toggleTheme}
                className="text-lg tracking-widest cursor-pointer transition-opacity duration-300 hover:opacity-80"
                style={{ color: isBackgroundDark ? lightColor : darkColor }}
             >
                <IoInvertMode />
             </button>
          </div>
          <StaggeredMenu
            isFixed={false}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor={menuButtonColor}
            openMenuButtonColor={openMenuButtonColor} // Keep same color when open if desired, or swap.
            changeMenuColorOnOpen={false}
            colors={isDark ? ["#191917", "#f3f3f0"] : ["#fff", "#191917"]} // Swap slide colors
            accentColor="#ff6b6b"
            panelBackgroundColor={panelBg}
            menuItemTextColor={itemText}
          />
        
      
    </header>
  );
};
