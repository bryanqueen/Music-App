import React from "react";

import { Text, Img } from "components";

const CardsProperty1long = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-pink_50 flex flex-col gap-[8px] h-[236px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] p-[16px] rounded-[16px] top-[0] md:w-[100%] w-[150px]">
          <div className="flex items-start justify-start w-[100%]">
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
        </div>
        <div className="absolute bottom-[0] flex h-[147px] md:h-[auto] inset-x-[0] items-center justify-center mx-[auto] pt-[16px] px-[16px] w-[147px]">
          <div className="flex h-[100%] items-center justify-center px-[16px] w-[100%]">
            {!!props?.thebandsitting ? (
              <Img
                src={props?.thebandsitting}
                className="h-[92px] md:h-[auto] object-cover sm:w-[100%] w-[83px]"
                alt="thebandsitting"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

CardsProperty1long.defaultProps = {
  selfimprove: "Self improve",
  time: "20 min",
};

export default CardsProperty1long;
