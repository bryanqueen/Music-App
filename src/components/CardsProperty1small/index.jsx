import React from "react";

import { Text, Img } from "components";

const CardsProperty1small = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-end w-[100%]">
          <Text
            className="font-poppins leading-[22.00px] md:max-w-[100%] max-w-[118px] text-gray_900 text-left tracking-[-0.50px]"
            variant="body2"
          >
            {props?.selfimprove}
          </Text>
        </div>
        <div className="flex items-center justify-start w-[100%]">
          <Text
            className="bg-white_A700 font-poppins font-semibold justify-center px-[8px] py-[4px] rounded-[12px] self-stretch text-gray_800 text-left w-[auto]"
            variant="body8"
          >
            {props?.time}
          </Text>
        </div>
        <div className="flex h-[118px] md:h-[auto] items-center justify-center w-[118px]">
          <div className="flex h-[114px] md:h-[auto] items-center justify-center px-[16px] w-[100%]">
            <Img
              src="images/img_thebandstanding.png"
              className="h-[100%] md:h-[auto] object-cover w-[100%]"
              alt="thebandstanding"
            />
          </div>
        </div>
      </div>
    </>
  );
};

CardsProperty1small.defaultProps = {
  selfimprove: "Self improve",
  time: "20 min",
};

export default CardsProperty1small;
