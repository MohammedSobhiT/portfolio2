import type { JSX } from "react";

interface StickyCardsProps {
  slideNum: string | "";
  topLeftText?: JSX.Element | string | "";
  topRightText?: JSX.Element | string | "";
  bottomLeftText?: JSX.Element | string | "";
  bottomRightText?: JSX.Element | string | "";
}

export const StickyCards = ({
slideNum,
  topLeftText,
  topRightText,
  bottomLeftText,
  bottomRightText,
}: StickyCardsProps) => {
  return (
    <div
      className={`grid grid-cols-8 items-center  px-6 h-[85dvh] font-satoshi sticky top-20 text-[#191917] bg-[#f3f3f0]  pt-24 `}
    >
      <div className="col-span-3 text-[10.5rem] h-full font-medium   -mt-34">
        {slideNum}
      </div>
      <div className="grid grid-cols-10 col-span-5 h-full border-t pt-10 pb-20">
        <div className="flex flex-col col-span-4 justify-between items-start h-full">
          <h2 className="text-3xl font-medium uppercase">{topLeftText}</h2>
          <p className="text-sm font-bold italic">{bottomLeftText}</p>
        </div>
        <div className="filler"></div>
        <div className="flex flex-col col-span-5 gap-6 justify-between h-full">
          <div className="flex w-full">
            <p className="text-sm w-3/5">{topRightText}</p>
            <div className="filler"></div>
          </div>
          <p className=" text-3xl">{bottomRightText}</p>
        </div>
      </div>
    </div>
  );
};
