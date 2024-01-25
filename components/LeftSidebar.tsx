"use client";

import { useMemo } from "react";
import Image from "next/image";

import { useCanvas } from "@/context/CanvasProvider";
import { getShapeInfo } from "@/lib/utils";

function LeftSidebar() {
  const { allShapes } = useCanvas();

  const memoizedSection = useMemo(
    () => (
      <section className="flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
        <h3 className="border border-primary-grey-200 px-5 py-4 text-xs uppercase">
          Layers
        </h3>
        <div className="flex flex-col">
          {allShapes?.current?.map((shape) => {
            const info = getShapeInfo(shape?.type);

            return (
              <div
                key={shape?.objectId}
                className="group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-primary-green hover:text-primary-black"
              >
                <Image
                  src={info?.icon}
                  alt="Layer"
                  width={16}
                  height={16}
                  className="group-hover:invert"
                />
                <h3 className="text-sm font-semibold">{info.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    ),
    [allShapes?.current.length]
  );

  return memoizedSection;
}

export default LeftSidebar;