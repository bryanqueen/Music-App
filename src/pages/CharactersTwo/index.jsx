import React from "react";

import { Img } from "components";

const CharactersTwoPage = () => {
  return (
    <>
      <div className="gap-[11.46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start mx-[auto] p-[11.46px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Img
          src="images/img_thebandmusicpractice.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandmusicpra"
        />
        <Img
          src="images/img_thebandmusicians.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandmusician"
        />
        <Img
          src="images/img_thebandparty.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandparty"
        />
        <Img
          src="images/img_thebandshow.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandshow"
        />
      </div>
    </>
  );
};

export default CharactersTwoPage;
