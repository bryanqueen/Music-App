import React from "react";

import { Text } from "components";

const UIControlsColumnlabelEleven = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-poppins not-italic text-gray_800 text-left tracking-[-0.50px] w-[auto]"
          variant="body4"
        >
          {props?.label_Eleven}
        </Text>
      </div>
    </>
  );
};

UIControlsColumnlabelEleven.defaultProps = { label_Eleven: "Sleep" };

export default UIControlsColumnlabelEleven;
