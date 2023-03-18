import React from "react";

import { Img, Text } from "components";

const UIControlsPropertysmall = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[16px] w-[16px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.textvalue_Four}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[16px] w-[16px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.textvalue_Four}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[16px] w-[16px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.textvalue_Four}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[16px] w-[16px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.textvalue_Four}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[16px] w-[16px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.textvalue_Four}
          </Text>
        </div>
      </div>
    </>
  );
};

UIControlsPropertysmall.defaultProps = {
  textvalue: "Small List Item",
  textvalue_One: "Small List Item",
  textvalue_Two: "Small List Item",
  textvalue_Three: "Small List Item",
  textvalue_Four: "Small List Item",
};

export default UIControlsPropertysmall;
