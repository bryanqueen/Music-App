import React from "react";

import { Img, Text, Button } from "components";

const UIControlsTypecta = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[4px] rounded-[50%] w-[40px]">
          <Img
            src="images/img_thebandspeaker.png"
            className="h-[32px] md:h-[auto] object-cover w-[32px]"
            alt="thebandspeaker"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.title_One}
          </Text>
          <Text
            className="font-bold font-inter text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle_One}
          </Text>
        </div>
        <Button className="bg-gray_900 cursor-pointer font-inter font-normal min-w-[62px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
          {props?.apply}
        </Button>
      </div>
    </>
  );
};

UIControlsTypecta.defaultProps = {
  title_One: "Title",
  subtitle_One: "Label",
  apply: "Apply",
};

export default UIControlsTypecta;
