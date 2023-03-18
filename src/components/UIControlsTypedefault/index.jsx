import React from "react";

import { Img, Text } from "components";

const UIControlsTypedefault = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_checkmark_gray_900.svg"
          className="h-[24px] w-[24px]"
          alt="checkmark_Two"
        />
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.unlimiteddownlo_Three}
        </Text>
      </div>
    </>
  );
};

UIControlsTypedefault.defaultProps = {
  unlimiteddownlo_Three: "Unlimited downloads",
};

export default UIControlsTypedefault;
