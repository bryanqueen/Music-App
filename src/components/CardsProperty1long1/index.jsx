import React from "react";

import { Text, Img } from "components";

const CardsProperty1long1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
          <div className="flex items-start justify-start w-[100%]">
            <Text
              className="font-poppins leading-[22.00px] md:max-w-[100%] max-w-[118px] text-gray_900 text-left tracking-[-0.50px]"
              variant="body2"
            >
              {props?.selfimprove_One}
            </Text>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <Text
              className="bg-white_A700 font-poppins font-semibold justify-center px-[8px] py-[4px] rounded-[12px] self-stretch text-gray_800 text-left w-[auto]"
              variant="body8"
            >
              {props?.time_One}
            </Text>
          </div>
        </div>
        <div className="flex h-[163px] md:h-[auto] items-center justify-center pt-[16px] px-[16px] w-[147px]">
          <div className="flex h-[100%] items-center justify-center px-[16px] w-[100%]">
            <Img
              src="images/img_thebandtorso_1.png"
              className="h-[67px] md:h-[auto] object-cover sm:w-[100%] w-[86px]"
              alt="thebandtorso"
            />
          </div>
        </div>
      </div>
    </>
  );
};

CardsProperty1long1.defaultProps = {
  selfimprove_One: "Self improve",
  time_One: "20 min",
};

export default CardsProperty1long1;
