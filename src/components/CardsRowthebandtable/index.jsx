import React from "react";

import { Img, Text } from "components";

const CardsRowthebandtable = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 flex h-[140px] md:h-[auto] items-center justify-center p-[8px] w-[140px]">
          <Img
            src="images/img_thebandtable.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandtable"
          />
        </div>
        <div className="flex h-[100%] items-start justify-start p-[16px] w-[100%]">
          <div className="flex flex-col gap-[8px] h-[100%] items-start justify-start w-[100%]">
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.productivity}
            </Text>
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[248px] text-black_900 text-left tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.language}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CardsRowthebandtable.defaultProps = {
  productivity: "Productivity",
  language: "Amet minim mollit non deserunt ullamco ",
};

export default CardsRowthebandtable;
