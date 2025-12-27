import InfiniteMenu from "./InfiniteMenu";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

export const Work = () => {
  
  const items = [
       {
      image: project2,
      link: "https://rey203.vercel.app/",
      title: "Rey.",
      description:
        "A full-featured e-commerce platform with admin dashboard, advanced product filtering, real-time API integration, and smooth scroll animations.",
    }, {
      image: project3,
      link: "https://mohammedsobhi.vercel.app/",
      title: "Terminal Portfolio.",
      description: "Combining a terminal experience with a 3D interactive card",
    },
    {
      image: project1,
      link: "https://thecustomchef.com/?srsltid=AfmBOoql1FY0qjD4AeiK-hm0p4Kn8X3r6fUPIMDneQlzMfTtlvKQNFZE",
      title: "TCC.",
      description:
        "A fully customized professional Shopify e-commerce store combining Shopify Liquid with React, GraphQL Storefront API, and GSAP animations for a smooth, high-performance user experience.",
    },

  ];

  return (
    <div className="h-fit overflow-visible relative flex pt-40 px-6 gap-10 bg-[#f3f3f0] text-[#191917]">
      <div className="h-dvh relative overflow-hidden">
        <InfiniteMenu items={items} scale={1.1} />
      </div>
     
      
      <h1 className="text-[12.5rem] leading-none text-right mb-20">Work.</h1>
    </div>
  );
};
