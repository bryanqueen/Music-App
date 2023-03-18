import React from "react";

import { Text } from "components";

const UIControlsColumnlabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.label}
        </Text>
        <div className="bg-gray_900 h-[2px] w-[100%]"></div>
      </div>
    </>
  );
};

UIControlsColumnlabel.defaultProps = { label: "Active" };

export default UIControlsColumnlabel;
