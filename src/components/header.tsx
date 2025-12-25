import StaggeredMenu from "./StaggeredMenu";
export const Header = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Work", ariaLabel: "View our work", link: "/work" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  return (
    <header className="  z-9999  fixed w-full">
          <StaggeredMenu
            isFixed={true}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#191917"
            openMenuButtonColor="#191917"
            changeMenuColorOnOpen={true}
            colors={["#fff", "#191917"]}
            accentColor="#ff6b6b"
          />
        
      
    </header>
  );
};
