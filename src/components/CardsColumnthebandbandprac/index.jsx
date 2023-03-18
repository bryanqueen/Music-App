import React from "react";

import { Img, Text } from "components";

const CardsColumnthebandbandprac = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] w-[100%]">
          {!!props?.thebandbandprac ? (
            <Img
              src={props?.thebandbandprac}
              className="h-[100%] md:h-[auto] object-cover w-[100%]"
              alt="thebandbandprac"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-start p-[16px] w-[100%]">
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.label_One}
          </Text>
          {!!props?.supertitle_One ? (
            <Text
              className="font-poppins text-black_900 text-left tracking-[-0.50px] w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.supertitle_One}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

CardsColumnthebandbandprac.defaultProps = { label_One: "Label" };

export default CardsColumnthebandbandprac;
