import React from "react";

import { Img } from "components";

const CoverLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-cyan_200 flex items-center justify-start rounded-[16px] w-[75px]">
          <Img
            src="images/img_volume.svg"
            className="h-[76px] rounded-[16px] w-[75px]"
            alt="volume"
          />
        </div>
        <Img
          src="images/img_blush.svg"
          className="h-[40px] w-[auto]"
          alt="blush"
        />
      </div>
    </>
  );
};

CoverLogo.defaultProps = {};

export default CoverLogo;
