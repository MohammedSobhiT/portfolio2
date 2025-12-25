import { UnicornScene } from "unicornstudio-react";
export const Hero = () => {
  return (
    <div className="w-full h-[calc(100% - 80px)] overflow-hidden flex items-center justify-center ">
      <UnicornScene
        projectId="R1WJYrcNTrBNRdxg2kNk"
        width={1920}
        height={775}
        fps={120}
      />

      <div className="flex justify-between items-end absolute bottom-5 left-0 w-full px-6 font-satoshi">
        <div className="w-3/5 text-[#191917] text-xl">Feed &darr;</div>
        <div className="flex justify-between items-end w-2/5  ">
          <p className="text-[#dedede5d] font-bold text-7xl">2025</p>
          <p className="text-[#191917] text-8xl">Portfolio</p>
        </div>
      </div>
    </div>
  );
};
