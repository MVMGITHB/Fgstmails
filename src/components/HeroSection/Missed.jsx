import dynamic from "next/dynamic";
import { Suspense } from "react";

const Crousel = dynamic(() => import("./Crousel"), {
  loading: () => <div className="h-40 flex items-center justify-center">Loading...</div>,
});

const Missed = () => {
  return (
    <div className="relative w-full px-4 md:px-8 py-6 mb-6">

      <div className="flex items-center justify-center gap-4">

        <div className="flex items-center gap-1">
          <div className="w-px h-6 bg-gray-400"/>
          <hr className="w-20 sm:w-32 h-px bg-gray-400 border-0"/>
        </div>

        <h2 className="text-2xl font-bold text-[#B00023] text-center">
          Our Recent Favorites
        </h2>

        <div className="flex items-center gap-1">
          <hr className="w-20 sm:w-32 h-px bg-gray-400 border-0"/>
          <div className="w-px h-6 bg-gray-400"/>
        </div>

      </div>

      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<div className="h-40"/>}>
          <Crousel />
        </Suspense>
      </div>

    </div>
  );
};

export default Missed;
