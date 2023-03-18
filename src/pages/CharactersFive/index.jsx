import React from "react";

import { Img } from "components";

const CharactersFivePage = () => {
  return (
    <>
      <div className="gap-[10px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start mx-[auto] p-[10px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Img
          src="images/img_thebandsitting_514x605.png"
          className="h-[514px] md:h-[auto] object-cover w-[100%]"
          alt="thebandsitting"
        />
        <Img
          src="images/img_thebandstanding.png"
          className="h-[514px] md:h-[auto] object-cover w-[100%]"
          alt="thebandstanding"
        />
        <Img
          src="images/img_thebandtorso_514x605.png"
          className="h-[514px] md:h-[auto] object-cover w-[100%]"
          alt="thebandtorso"
        />
      </div>
    </>
  );
};

export default CharactersFivePage;
