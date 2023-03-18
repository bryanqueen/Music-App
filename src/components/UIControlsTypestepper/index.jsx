import React from "react";

import { Text, Img } from "components";

const UIControlsTypestepper = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start py-[8px] w-[100%]">
          <Text
            className="font-bold font-inter text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.value}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Img
            src="images/img_righticon.svg"
            className="h-[16px] w-[16px]"
            alt="righticon"
          />
          <Img
            src="images/img_plus.svg"
            className="h-[16px] w-[16px]"
            alt="plus"
          />
        </div>
      </div>
    </>
  );
};

UIControlsTypestepper.defaultProps = { value: "Value" };

export default UIControlsTypestepper;
