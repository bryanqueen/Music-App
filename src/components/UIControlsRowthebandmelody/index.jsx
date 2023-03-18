import React from "react";

import { Img, Text } from "components";

const UIControlsRowthebandmelody = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[4px] rounded-[50%] w-[40px]">
          <Img
            src="images/img_thebandmelody.png"
            className="h-[32px] md:h-[auto] object-cover w-[32px]"
            alt="thebandmelody"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.title_Two}
          </Text>
          <Text
            className="font-bold font-inter text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle_Two}
          </Text>
        </div>
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
        <Img
          src="images/img_user.svg"
          className="h-[24px] w-[24px]"
          alt="user_One"
        />
      </div>
    </>
  );
};

UIControlsRowthebandmelody.defaultProps = {
  title_Two: "Title",
  subtitle_Two: "Label",
};

export default UIControlsRowthebandmelody;
