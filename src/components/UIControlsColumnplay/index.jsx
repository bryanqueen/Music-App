import React from "react";

import { Img } from "components";

const UIControlsColumnplay = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex h-[80px] md:h-[auto] items-start justify-start w-[80px]">
          <div className="bg-orange_200 flex h-[80px] md:h-[auto] items-center justify-center p-[16px] rounded-[50%] w-[80px]">
            <Img
              src="images/img_play.svg"
              className="h-[32px] w-[32px]"
              alt="play"
            />
          </div>
        </div>
      </div>
    </>
  );
};

UIControlsColumnplay.defaultProps = {};

export default UIControlsColumnplay;
