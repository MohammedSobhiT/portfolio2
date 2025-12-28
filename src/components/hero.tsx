import { UnicornScene } from "unicornstudio-react";
export const Hero = () => {
  return (
    <div className="hero w-screen relative h-[calc(100% - 80px)] max-h-dvh overflow-hidden flex items-center justify-center">
      <UnicornScene
        projectId="R1WJYrcNTrBNRdxg2kNk"
        width={1920}
        height={775}
        fps={120}
      />

      <div className="flex justify-between items-end absolute md:bottom-5 bottom-7 left-0 w-full px-6 font-satoshi text-white mix-blend-difference">
        <div className="w-3/5 text-xl md:block hidden">Feed &darr;</div>
        <div className="flex justify-between items-end md:w-2/5 w-full  ">
          <p className="text-[#dedede5d] font-bold md:text-7xl text-2xl">2025</p>
          <p className="md:text-8xl text-6xl">Portfolio</p>
        </div>
      </div>
    </div>
  );
};
