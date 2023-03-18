import React from "react";

import { Img } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UIControlsStackslider = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[231px] inset-[0] m-[auto] p-[16px] w-[231px]">
          <div className="bg-orange_200 flex h-[100%] items-center justify-center m-[auto] pb-[8px] sm:px-[20px] px-[24px] rounded-[99px] w-[199px]">
            {!!props?.thebandband_One ? (
              <Img
                src={props?.thebandband_One}
                className="h-[147px] md:h-[auto] object-cover sm:w-[100%] w-[165px]"
                alt="thebandband_One"
              />
            ) : null}
          </div>
          {!!props?.groupNine ? (
            <CircularProgressbar
              className="!w-[231px] absolute border-solid h-[231px] inset-[0] justify-center m-[auto] overflow-visible"
              value={props?.groupNine}
              strokeWidth={2}
              styles={{
                trail: { strokeWidth: 50, stroke: "" },
                path: {
                  strokeLinecap: "square",
                  height: "100%",
                  transformOrigin: "center",
                  transform: "rotate(0deg)",
                },
              }}
            ></CircularProgressbar>
          ) : null}
        </div>
        {!!props?.slider ? (
          <div className="absolute bg-light_blue_50 border-[1px] border-light_blue_50 border-solid bottom-[0] h-[16px] left-[35%] rounded-[50%] w-[16px]"></div>
        ) : null}
      </div>
    </>
  );
};

UIControlsStackslider.defaultProps = {};

export default UIControlsStackslider;
