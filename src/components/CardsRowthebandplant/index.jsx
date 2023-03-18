import React from "react";

import { Img, Text } from "components";

const CardsRowthebandplant = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_800 flex h-[140px] md:h-[auto] items-center justify-center p-[8px] w-[140px]">
          <Img
            src="images/img_thebandplant.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandplant"
          />
        </div>
        <div className="flex h-[100%] items-start justify-start p-[16px] w-[100%]">
          <div className="flex flex-col gap-[8px] h-[100%] items-start justify-start w-[100%]">
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.productivity_One}
            </Text>
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[248px] text-left text-white_A700 tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.language_One}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CardsRowthebandplant.defaultProps = {
  productivity_One: "Productivity",
  language_One: "Amet minim mollit non deserunt ullamco ",
};

export default CardsRowthebandplant;
