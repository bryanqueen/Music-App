import React from "react";

import { Text } from "components";

const UIControlsColumnlabelOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter text-gray_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.label_One}
        </Text>
      </div>
    </>
  );
};

UIControlsColumnlabelOne.defaultProps = { label_One: "Inactive" };

export default UIControlsColumnlabelOne;
