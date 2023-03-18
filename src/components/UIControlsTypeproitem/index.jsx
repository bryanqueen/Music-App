import React from "react";

import { Img, Text } from "components";

const UIControlsTypeproitem = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_lock_orange_a200.svg"
          className="h-[24px] w-[24px]"
          alt="lock_One"
        />
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.unlimiteddownlo_One}
        </Text>
      </div>
    </>
  );
};

UIControlsTypeproitem.defaultProps = {
  unlimiteddownlo_One: "Unlimited downloads",
};

export default UIControlsTypeproitem;
