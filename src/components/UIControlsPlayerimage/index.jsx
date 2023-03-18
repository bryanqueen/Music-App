import React from "react";

import { Img } from "components";

const UIControlsPlayerimage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex h-[249px] items-center justify-start w-[249px]">
          <div className="h-[249px] p-[14.87px] relative w-[249px]">
            {!!props?.illustrations ? (
              <Img
                src={props?.illustrations}
                className="absolute h-[100%] inset-[0] m-[auto] object-cover rounded-[92px] w-[215px]"
                alt="illustrations"
              />
            ) : null}
            <div className="absolute border-[3px] border-orange_200 border-solid h-[249px] inset-[0] justify-center m-[auto] rounded-[124px] w-[249px]">
              {!!props?.musicprogrress ? (
                <div className="absolute border-[7px] border-orange_200 border-solid h-[249px] inset-[0] justify-center m-[auto] rounded-[124px] w-[249px]"></div>
              ) : null}
              {!!props?.slider ? (
                <div className="absolute bg-orange_200 bottom-[4%] h-[17px] inset-x-[0] mx-[auto] rounded-[8px] w-[17px]"></div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UIControlsPlayerimage.defaultProps = {};

export default UIControlsPlayerimage;
