import React from "react";

import { Text } from "components";

const UIControlsStatedefault = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-black_900 border-solid h-[16px] rounded-[2px] w-[16px]"></div>
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.label_Three}
        </Text>
      </div>
    </>
  );
};

UIControlsStatedefault.defaultProps = { label_Three: "Default" };

export default UIControlsStatedefault;
