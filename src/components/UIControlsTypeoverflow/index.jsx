import React from "react";

import { Img, Text } from "components";

const UIControlsTypeoverflow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[4px] rounded-[50%] w-[40px]">
          <Img
            src="images/img_thebandtable.png"
            className="h-[32px] md:h-[auto] object-cover w-[32px]"
            alt="thebandtable"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.title}
          </Text>
          <Text
            className="font-bold font-inter text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle}
          </Text>
        </div>
        <Img
          src="images/img_user.svg"
          className="h-[24px] w-[24px]"
          alt="user"
        />
      </div>
    </>
  );
};

UIControlsTypeoverflow.defaultProps = { title: "Title", subtitle: "Label" };

export default UIControlsTypeoverflow;
