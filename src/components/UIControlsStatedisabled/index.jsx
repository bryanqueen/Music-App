import React from "react";

import { Text } from "components";

const UIControlsStatedisabled = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 border-[1px] border-bluegray_600 border-solid h-[16px] rounded-[2px] w-[16px]"></div>
        <Text
          className="font-bold font-inter text-bluegray_600 text-left w-[auto]"
          variant="body6"
        >
          {props?.label_Five}
        </Text>
      </div>
    </>
  );
};

UIControlsStatedisabled.defaultProps = { label_Five: "Disabled" };

export default UIControlsStatedisabled;
