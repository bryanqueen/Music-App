import React from "react";

import { Img, Text, Button } from "components";

const CardsColumnthebandmusicpra = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_900 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
          <Img
            src="images/img_thebandmusicpractice.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandmusicpra"
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-poppins text-left text-white_A700 tracking-[-0.50px] w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.title_One}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle_One}
          </Text>
        </div>
        <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
          <Button className="bg-gray_900 border-[1px] border-solid border-white_A700 cursor-pointer flex-1 font-inter font-normal not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[100%]">
            {props?.get_It_One}
          </Button>
          <Button className="bg-white_A700 cursor-pointer flex-1 font-inter font-normal not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
            {props?.download_Five}
          </Button>
        </div>
      </div>
    </>
  );
};

CardsColumnthebandmusicpra.defaultProps = {
  title_One: "Title",
  subtitle_One: "Subtitle",
  get_It_One: "Get it",
  download_Five: "Download",
};

export default CardsColumnthebandmusicpra;
