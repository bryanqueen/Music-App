import React from "react";

import { Text, Img, Button } from "components";

const CardsColumnthisisatitleOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:h-[auto] p-[16px] relative rounded-[16px] md:w-[100%] w-[320px]">
          <div className="md:h-[272px] h-[345px] mx-[auto] w-[93%]">
            <div className="absolute flex flex-col gap-[8px] inset-x-[0] items-start justify-start mx-[auto] self-stretch top-[0] w-[auto]">
              <Text
                className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[288px] text-left text-white_A700 tracking-[-0.50px]"
                as="h6"
                variant="h6"
              >
                {props?.thisisatitle_One}
              </Text>
              <Text
                className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
                variant="body8"
              >
                {props?.thisisanicesubt_Five}
              </Text>
            </div>
            <Img
              src="images/img_thebandband_272x295.png"
              className="absolute bottom-[0] h-[272px] inset-x-[0] mx-[auto] object-cover w-[295px]"
              alt="thebandband"
            />
          </div>
          <Button className="bg-indigo_A700 cursor-pointer font-inter font-normal min-w-[90px] mt-[-13px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto] z-[1]">
            {props?.download_Four}
          </Button>
        </div>
      </div>
    </>
  );
};

CardsColumnthisisatitleOne.defaultProps = {
  thisisatitle_One: "This is a title that looks pretty nice",
  thisisanicesubt_Five: "This is a nice subtitle or label",
  download_Four: "Download",
};

export default CardsColumnthisisatitleOne;
