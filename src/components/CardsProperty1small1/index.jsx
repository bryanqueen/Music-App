import React from "react";

import { Text, Img } from "components";

const CardsProperty1small1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-end w-[100%]">
          <Text
            className="font-poppins leading-[22.00px] md:max-w-[100%] max-w-[118px] text-gray_900 text-left tracking-[-0.50px]"
            variant="body2"
          >
            {props?.selfimprove_One}
          </Text>
        </div>
        <div className="flex flex-col relative w-[100%]">
          <div className="flex items-center justify-start mx-[auto] w-[118px]">
            <Text
              className="bg-white_A700 font-poppins font-semibold justify-center px-[8px] py-[4px] rounded-[12px] self-stretch text-center text-gray_800 w-[auto]"
              variant="body8"
            >
              {props?.time_One}
            </Text>
          </div>
          <div className="flex h-[112px] md:h-[auto] items-center justify-center mt-[-9.5px] mx-[auto] w-[118px] z-[1]">
            <div className="flex h-[112px] md:h-[auto] items-center justify-center px-[16px] w-[100%]">
              <Img
                src="images/img_thebandtorso_67x86.png"
                className="h-[67px] md:h-[auto] object-cover sm:w-[100%] w-[86px]"
                alt="thebandtorso"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardsProperty1small1.defaultProps = {
  selfimprove_One: "Self improve",
  time_One: "20 min",
};

export default CardsProperty1small1;
