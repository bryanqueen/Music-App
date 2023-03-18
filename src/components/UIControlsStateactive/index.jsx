import React from "react";

import { Img, Text } from "components";

const UIControlsStateactive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-indigo_A700 flex h-[16px] items-center justify-start rounded-[2px] w-[16px]">
          <Img
            src="images/img_checkmark.svg"
            className="h-[16px] rounded-[2px] w-[16px]"
            alt="checkmark"
          />
        </div>
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.label_Four}
        </Text>
      </div>
    </>
  );
};

UIControlsStateactive.defaultProps = { label_Four: "Active" };

export default UIControlsStateactive;
