import React from "react";

import { Img } from "components";

const CharactersOnePage = () => {
  return (
    <>
      <div className="gap-[11.46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start mx-[auto] p-[11.46px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Img
          src="images/img_default.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandband"
        />
        <Img
          src="images/img_thebandbandpractice_589x693.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandbandprac"
        />
        <Img
          src="images/img_thebandconcert.png"
          className="h-[589px] md:h-[auto] object-cover w-[100%]"
          alt="thebandconcert"
        />
      </div>
    </>
  );
};

export default CharactersOnePage;
