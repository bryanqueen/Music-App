import React from "react";

import { Img, Text } from "components";

const CardsColumnthebandparty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_800 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] w-[100%]">
          <Img
            src="images/img_thebandparty.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandparty"
          />
        </div>
        <div className="flex flex-col gap-[16px] items-start justify-start p-[16px] md:w-[100%] w-[320px]">
          <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins text-left text-white_A700 tracking-[-0.50px] w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.thisisanicetitl_Three}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.thisisanicesubt_Seven}
            </Text>
          </div>
          <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
            <Img
              src="images/img_user.svg"
              className="h-[24px] w-[24px]"
              alt="user_One"
            />
            <Img
              src="images/img_camera.svg"
              className="h-[24px] w-[24px]"
              alt="camera_One"
            />
            <Img
              src="images/img_favorite_bluegray_600.svg"
              className="h-[24px] w-[24px]"
              alt="favorite_One"
            />
            <Img
              src="images/img_send.svg"
              className="h-[24px] w-[24px]"
              alt="send_One"
            />
          </div>
        </div>
        <div className="bg-indigo_A700 flex items-center justify-center px-[16px] py-[12px] w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-center text-white_A700 tracking-[-0.50px] w-[auto]"
            variant="body4"
          >
            {props?.label_Five}
          </Text>
        </div>
      </div>
    </>
  );
};

CardsColumnthebandparty.defaultProps = {
  thisisanicetitl_Three: "This is a nice title",
  thisisanicesubt_Seven: "This is a nice subtitle or label",
  label_Five: "Download",
};

export default CardsColumnthebandparty;
