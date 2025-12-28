import InfiniteMenu from "./InfiniteMenu";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";

interface WorkProps {
  isDark: boolean;
}

export const Work = ({ isDark }: WorkProps) => {
  const items = [
    {
      image: project2,
      link: "https://rey203.vercel.app/",
      title: "Rey.",
      description:
        "A full-featured e-commerce platform with admin dashboard, advanced product filtering, real-time API integration, and smooth scroll animations.",
    },
    {
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
    <div
      id="work"
      className=" md:h-fit h-dvh max-h-dvh overflow-visible relative flex md:flex-row flex-col-reverse pb-20 md:pb-40 px-6 gap-10"
    >
      <div className="md:h-dvh h-[60dvh] relative overflow-hidden">
        <InfiniteMenu items={items} scale={1.1} isDark={isDark} />
      </div>

      <h1
        className={`md:text-[12.5rem] text-[4rem] md:text-right leading-none  md:mb-20 text-white mix-blend-difference`}
      >
        Work.
      </h1>
    </div>
  );
};
