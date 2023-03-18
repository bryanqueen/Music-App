import React from "react";

import { Img, Text, Button } from "components";

const CardsColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_800 flex h-[224px] md:h-[auto] items-center justify-center p-[16px] w-[100%]">
          <Img
            src="images/img_thebandband_192x288.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandband"
          />
        </div>
        <div className="flex flex-col gap-[16px] items-start justify-start p-[16px] w-[100%]">
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.productivity}
            </Text>
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[288px] text-left text-white_A700 tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.language}
            </Text>
            <Text
              className="font-normal font-poppins leading-[150.00%] md:max-w-[100%] max-w-[288px] not-italic text-left text-white_A700"
              variant="body6"
            >
              {props?.timeZone}
            </Text>
          </div>
          <div className="flex flex-row gap-[34px] items-center justify-between w-[100%]">
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Button className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                <Img
                  src="images/img_avatar_1.png"
                  className="h-[24px]"
                  alt="avatar"
                />
              </Button>
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
                variant="body6"
              >
                {props?.darrellsteward}
              </Text>
            </div>
            <Text
              className="font-normal font-poppins not-italic text-indigo_A700 text-left w-[auto]"
              variant="body6"
            >
              {props?.action}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CardsColumn.defaultProps = {
  productivity: "Productivity",
  language: "Amet minim mollit non deserunt ullamco ",
  timeZone:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  darrellsteward: "Darrell Steward",
  action: "Read More",
};

export default CardsColumn;
