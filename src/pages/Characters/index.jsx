import React from "react";

import { Img } from "components";

const CharactersPage = () => {
  return (
    <>
      <div className="gap-[11.46px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-start justify-start mx-[auto] p-[11.46px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Img
          src="images/img_thebandbank.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandbank"
        />
        <Img
          src="images/img_thebandbassclef.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandbassclef"
        />
        <Img
          src="images/img_thebandbeamnotes.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandbeamnote"
        />
        <Img
          src="images/img_thebandbeamnotes_294x346.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandbeamnote_One"
        />
        <Img
          src="images/img_thebandchair.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandchair"
        />
        <Img
          src="images/img_thebandcrotchet.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandcrotchet"
        />
        <Img
          src="images/img_thebanddotted.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebanddotted"
        />
        <Img
          src="images/img_thebanddrum.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebanddrum"
        />
        <Img
          src="images/img_thebandguitar.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandguitar"
        />
        <Img
          src="images/img_avatar_40x40.png"
          className="h-[294px] md:h-[auto] object-cover w-[100%]"
          alt="thebandhotcup"
        />
      </div>
    </>
  );
};

export default CharactersPage;
