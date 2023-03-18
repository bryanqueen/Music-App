import React from "react";

import { Img, Text } from "components";

const CardsColumnthebandmusician = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] w-[100%]">
          <Img
            src="images/img_thebandmusicians.png"
            className="h-[179px] sm:h-[auto] object-cover md:w-[100%] w-[320px]"
            alt="thebandmusician"
          />
        </div>
        <div className="flex flex-col gap-[16px] items-start justify-start p-[16px] w-[320px]">
          <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins text-gray_900 text-left tracking-[-0.50px] w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.thisisanicetitl_One}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.thisisanicesubt_Three}
            </Text>
          </div>
          <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
            <Img
              src="images/img_user.svg"
              className="h-[24px] w-[24px]"
              alt="user"
            />
            <Img
              src="images/img_camera.svg"
              className="h-[24px] w-[24px]"
              alt="camera"
            />
            <Img
              src="images/img_favorite_bluegray_600.svg"
              className="h-[24px] w-[24px]"
              alt="favorite"
            />
            <Img
              src="images/img_send.svg"
              className="h-[24px] w-[24px]"
              alt="send"
            />
          </div>
        </div>
        <div className="bg-gray_900 flex items-center justify-center px-[16px] py-[12px] w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-center text-white_A700 tracking-[-0.50px] w-[auto]"
            variant="body4"
          >
            {props?.label_Two}
          </Text>
        </div>
      </div>
    </>
  );
};

CardsColumnthebandmusician.defaultProps = {
  thisisanicetitl_One: "This is a nice title",
  thisisanicesubt_Three: "This is a nice subtitle or label",
  label_Two: "Download",
};

export default CardsColumnthebandmusician;
