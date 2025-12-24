import { UnicornScene } from "unicornstudio-react";

export const Hero = () => {
  return (
    <div className="w-full h-[calc(100% - 80px)] overflow-hidden flex items-center justify-center ">
      <UnicornScene
        projectId="V1iKzzvQcreKVRU76lnc"
        width={1920}
        height={775}
        fps={120}
        className="uni"
      />
    </div>
  );
};
