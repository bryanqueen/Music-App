import React from "react";

import { Text, Img } from "components";

const UIControlsRowtitleThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.title_Three}
          </Text>
          <Text
            className="font-bold font-inter text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle_Three}
          </Text>
        </div>
        <div className="flex h-[24px] items-center justify-start w-[24px]">
          <Img
            src="images/img_arrowright.svg"
            className="h-[24px] w-[24px]"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

UIControlsRowtitleThree.defaultProps = {
  title_Three: "Title",
  subtitle_Three: "Label",
};

export default UIControlsRowtitleThree;
