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
      title: "Rey .Personal.",
      description:
        "A full-featured e-commerce platform.",
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
      title: "TCC .Nockta.",
      description:
        "A fully customized Shopify store combining Shopify Liquid with React, GraphQL Storefront API, and GSAP ",
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
        className={`md:text-[12.5rem] text-[4rem] md:text-right leading-none md:text-white  md:mb-20 ${isDark ? "text-white" : "text-[#191917]"} mix-blend-difference`}
      >
        Work.
      </h1>
    </div>
  );
};
