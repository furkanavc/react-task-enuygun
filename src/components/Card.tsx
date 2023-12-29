import React from "react";
import Image from "next/image";
export const Card = () => {
  return (
    <div className="h-96 w-full max-w-xs flex flex-col rounded-md border relative overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src="https://picsum.photos/200/300"
          fill
          alt="dummyimage"
          className="object-cover"
        />
      </div>
      <div className="bg-black h-12 flex items-center justify-around">
        <span className="size-10 bg-slate-400 rounded-md hover:bg-slate-300 text-lg flex items-center justify-center">
          -
        </span>
        <span className="size-10 bg-slate-400 rounded-md hover:bg-slate-300 text-lg flex items-center justify-center">
          +
        </span>
      </div>
    </div>
  );
};
