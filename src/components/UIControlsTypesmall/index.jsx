import React from "react";

import { Img, Text } from "components";

const UIControlsTypesmall = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_checkmark_gray_900.svg"
          className="h-[16px] w-[16px]"
          alt="checkmark_Three"
        />
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body8"
        >
          {props?.textvalue}
        </Text>
      </div>
    </>
  );
};

UIControlsTypesmall.defaultProps = { textvalue: "Small List Item" };

export default UIControlsTypesmall;
