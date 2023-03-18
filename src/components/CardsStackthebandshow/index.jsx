import React from "react";

import { Img, Text, Button } from "components";

const CardsStackthebandshow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 flex h-[100%] md:h-[auto] items-center justify-end m-[auto] p-[8px] w-[319px]">
          <Img
            src="images/img_thebandshow.png"
            className="h-[388px] md:h-[auto] object-cover w-[100%]"
            alt="thebandshow"
          />
        </div>
        <div className="absolute flex flex-col gap-[16px] h-[100%] md:h-[auto] inset-[0] items-start justify-between m-[auto] p-[16px] rounded-[16px] md:w-[100%] w-[320px]">
          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[288px] text-gray_900 text-left tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.thisisatitle}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.thisisanicesubt_One}
            </Text>
          </div>
          <Button className="bg-indigo_A700 cursor-pointer font-inter font-normal min-w-[90px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
            {props?.download_One}
          </Button>
        </div>
      </div>
    </>
  );
};

CardsStackthebandshow.defaultProps = {
  thisisatitle: "This is a title that looks pretty nice",
  thisisanicesubt_One: "This is a nice subtitle or label",
  download_One: "Download",
};

export default CardsStackthebandshow;
