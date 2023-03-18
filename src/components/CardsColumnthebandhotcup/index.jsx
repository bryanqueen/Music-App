import React from "react";

import { Img, Text } from "components";

const CardsColumnthebandhotcup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[16px] rounded-[50%] w-[80px]">
          <Img
            src="images/img_avatar_40x40.png"
            className="h-[48px] md:h-[auto] object-cover w-[48px]"
            alt="thebandhotcup"
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
          <Text
            className="font-poppins leading-[22.00px] text-black_900 text-center tracking-[-0.50px] w-[100%]"
            variant="body2"
          >
            {props?.darlenerobertso_One}
          </Text>
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

CardsColumnthebandhotcup.defaultProps = {
  darlenerobertso_One: "Darlene Robertson",
};

export default CardsColumnthebandhotcup;
