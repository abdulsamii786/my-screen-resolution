import React, { useEffect, useState } from "react";
import { TbArrowsMoveHorizontal, TbArrowsMoveVertical } from "react-icons/tb";
import { TfiFullscreen } from "react-icons/tfi";

const Home = () => {
  const [resolution, setResolution] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  const updateDimension = () => {
    setResolution({
      width: window.screen.width,
      height: window.screen.height,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, [resolution]);

  return (
    <div className="h-[100vh] flex items-center justify-center p-5 bg-slate-100">
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center flex-col gap-2">
          <h2 className="text-3xl font-semibold text-center">
            Your Screen Resolution is
          </h2>
          <div className="flex items-center gap-3">
            <TfiFullscreen className="text-4xl" />
            <h2 className="text-5xl font-normal">
              {resolution.width} x {resolution.height}
            </h2>
          </div>
        </div>

        <div className="flex items-center flex-col gap-2">
          <h2 className="text-md font-semibold text-center bg-cyan-900 text-white px-2 rounded-md">
            Screen Width
          </h2>
          <div className="flex items-center gap-1 ">
            <TbArrowsMoveHorizontal className="text-2xl" />
            <h2 className="text-2xl font-normal ">
              {resolution.width} px
            </h2>
          </div>
        </div>

        <div className="flex items-center flex-col gap-2">
          <h2 className="text-md font-semibold text-center bg-cyan-900 text-white px-2 rounded-md">
            Screen Height
          </h2>
          <div className="flex items-center gap-1">
            <TbArrowsMoveVertical className="text-2xl" />
            <h2 className="text-2xl font-normal ">
              {resolution.height} px
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
