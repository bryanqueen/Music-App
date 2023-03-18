import React from "react";

import { Text, Img } from "components";

const CardsBigcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-start justify-end w-[100%]">
          <Text
            className="flex-1 font-poppins text-gray_900 text-left tracking-[-0.50px] w-[auto]"
            variant="body2"
          >
            {props?.selfimprove}
          </Text>
          <div className="flex flex-1 items-center justify-end w-[100%]">
            <Text
              className="bg-white_A700 font-poppins font-semibold justify-center px-[8px] py-[4px] rounded-[12px] self-stretch text-gray_800 text-left w-[auto]"
              variant="body8"
            >
              {props?.time}
            </Text>
          </div>
        </div>
        <div className="flex h-[118px] md:h-[auto] items-center justify-center w-[100%]">
          <div className="flex h-[114px] md:h-[auto] items-center justify-center px-[16px] w-[100%]">
            <Img
              src="images/img_default.png"
              className="h-[100%] md:h-[auto] object-cover w-[100%]"
              alt="thebandband_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

CardsBigcard.defaultProps = { selfimprove: "Self improve", time: "20 min" };

export default CardsBigcard;
