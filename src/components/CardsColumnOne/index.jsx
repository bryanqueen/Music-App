import React from "react";

import { Img, Text, Button } from "components";

const CardsColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[16px] rounded-[50%] w-[96px]">
          <Img
            src="images/img_thebandguitar_64x64.png"
            className="h-[64px] md:h-[auto] object-cover w-[64px]"
            alt="thebandguitar"
          />
        </div>
        <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
          <div className="flex flex-col gap-[8px] items-start justify-start w-[160px]">
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[160px] text-center text-gray_900 tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.darlenerobertso_One}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-center w-[auto]"
              variant="body8"
            >
              {props?.subtitle}
            </Text>
          </div>
          <Button className="bg-gray_900 cursor-pointer font-inter font-normal not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[100%]">
            {props?.download}
          </Button>
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
      </div>
    </>
  );
};

CardsColumnOne.defaultProps = {
  darlenerobertso_One: "Darlene Robertson",
  subtitle: "(684) 555-0102",
  download: "Download",
};

export default CardsColumnOne;
