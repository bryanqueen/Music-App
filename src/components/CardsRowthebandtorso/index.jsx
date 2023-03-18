import React from "react";

import { Img, Text, Button } from "components";

const CardsRowthebandtorso = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 flex h-[256px] md:h-[auto] items-center justify-center p-[16px] w-[264px]">
          <Img
            src="images/img_thebandtorso.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandtorso"
          />
        </div>
        <div className="flex flex-col gap-[16px] h-[256px] md:h-[auto] items-start justify-start p-[16px] sm:w-[100%] w-[407px]">
          <div className="flex flex-col gap-[8px] h-[100%] items-start justify-start w-[100%]">
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.productivity}
            </Text>
            <Text
              className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[375px] text-black_900 text-left tracking-[-0.50px]"
              as="h6"
              variant="h6"
            >
              {props?.language}
            </Text>
            <Text
              className="font-normal font-poppins leading-[150.00%] md:max-w-[100%] max-w-[375px] not-italic text-black_900 text-left"
              variant="body6"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-row gap-[34px] items-center justify-between w-[100%]">
            <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
              <Button className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                <Img
                  src="images/img_default.png"
                  className="h-[24px]"
                  alt="avatar"
                />
              </Button>
              <Text
                className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                variant="body6"
              >
                {props?.darrellsteward}
              </Text>
            </div>
            <Text
              className="font-normal font-poppins not-italic text-indigo_A700 text-left w-[auto]"
              variant="body6"
            >
              {props?.readmore}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CardsRowthebandtorso.defaultProps = {
  productivity: "Productivity",
  language: "Amet minim mollit non deserunt ullamco ",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  darrellsteward: "Darrell Steward",
  readmore: "Read More",
};

export default CardsRowthebandtorso;
