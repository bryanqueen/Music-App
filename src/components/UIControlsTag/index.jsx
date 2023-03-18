import React from "react";

import { Text } from "components";

const UIControlsTag = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
          variant="body8"
        >
          {props?.label_Ten}
        </Text>
      </div>
    </>
  );
};

UIControlsTag.defaultProps = { label_Ten: "Sleep" };

export default UIControlsTag;
