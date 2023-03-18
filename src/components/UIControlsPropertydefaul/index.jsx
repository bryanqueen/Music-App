import React from "react";

import { Img, Text } from "components";

const UIControlsPropertydefaul = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[24px] w-[24px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.unlimiteddownlo_Nine}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[24px] w-[24px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.unlimiteddownlo_Nine}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[24px] w-[24px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.unlimiteddownlo_Nine}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[24px] w-[24px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.unlimiteddownlo_Nine}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <Img
            src="images/img_checkmark_gray_900.svg"
            className="h-[24px] w-[24px]"
            alt="checkmark_Four"
          />
          <Text
            className="font-bold font-inter text-gray_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.unlimiteddownlo_Nine}
          </Text>
        </div>
      </div>
    </>
  );
};

UIControlsPropertydefaul.defaultProps = {
  unlimiteddownlo_One: "Unlimited downloads",
  unlimiteddownlo_Three: "Unlimited downloads",
  unlimiteddownlo_Five: "Unlimited downloads",
  unlimiteddownlo_Seven: "Unlimited downloads",
  unlimiteddownlo_Nine: "Unlimited downloads",
};

export default UIControlsPropertydefaul;
