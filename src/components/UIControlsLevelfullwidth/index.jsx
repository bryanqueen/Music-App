import React from "react";

import { Text } from "components";

const UIControlsLevelfullwidth = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-gray_900 text-left tracking-[-0.50px] w-[auto]"
          variant="body4"
        >
          {props?.label_Nine}
        </Text>
      </div>
    </>
  );
};

UIControlsLevelfullwidth.defaultProps = { label_Nine: "Button" };

export default UIControlsLevelfullwidth;
