import React from "react";

import { Img, Text } from "components";

const CardsColumnthebandsofa = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_800 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] w-[100%]">
          <Img
            src="images/img_thebandsofa.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandsofa"
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-start p-[16px] w-[100%]">
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.label_Four}
          </Text>
          <Text
            className="font-poppins text-left text-white_A700 tracking-[-0.50px] w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.supertitle_Three}
          </Text>
        </div>
      </div>
    </>
  );
};

CardsColumnthebandsofa.defaultProps = {
  label_Four: "Label",
  supertitle_Three: "Super Title",
};

export default CardsColumnthebandsofa;
