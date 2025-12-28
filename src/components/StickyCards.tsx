import type { JSX } from "react";

interface StickyCardsProps {
  slideNum: string | "";
  topLeftText?: JSX.Element | string | "";
  topRightText?: JSX.Element | string | "";
  bottomLeftText?: JSX.Element | string | "";
  bottomRightText?: JSX.Element | string | "";
  isDark: boolean;
}

export const StickyCards = ({
slideNum,
  topLeftText,
  topRightText,
  bottomLeftText,
  bottomRightText,
  isDark,
}: StickyCardsProps) => {
  return (
    <div
      className={`md:grid grid-cols-8 flex flex-col md:items-center  px-6 h-[85dvh] font-satoshi md:sticky md:top-20 pt-24 transition-colors duration-500 ${isDark ? "bg-[#191917] text-white border-white" : "bg-[#f3f3f0] text-[#191917] border-[#191917]"}`}
    >
      <div className="col-span-3 md:text-[10.5rem] text-8xl md:h-full font-medium h-fit md:-mt-34">
        {slideNum}
      </div>
      <div className="grid grid-cols-10 col-span-5 h-full border-t pt-10 pb-20">
        <div className="flex flex-col col-span-4 justify-between items-start h-full">
          <h2 className="md:text-3xl font-medium uppercase">{topLeftText}</h2>
          <p className="text-xs font-bold italic">&bull; {bottomLeftText}</p>
        </div>
        <div className="filler md:block hidden"></div>
        <div className="flex flex-col col-span-5 gap-6 justify-between h-full">
          <div className="flex w-full">
            <p className="text-xs md:w-3/5 w-full">{topRightText}</p>
            <div className="filler md:block hidden"></div>
          </div>
          <p className=" md:text-3xl">{bottomRightText}</p>
        </div>
      </div>
    </div>
  );
};
