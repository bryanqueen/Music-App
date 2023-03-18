import React from "react";

import { Img, Text, Button } from "components";

const CardsColumnthebandmusical = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-bluegray_50 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
          <Img
            src="images/img_thebandmusical.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandmusical"
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-poppins text-black_900 text-left tracking-[-0.50px] w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.title}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.subtitle}
          </Text>
        </div>
        <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
          <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer flex-1 font-inter font-normal not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
            {props?.get_It}
          </Button>
          <Button className="bg-gray_900 cursor-pointer flex-1 font-inter font-normal not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[100%]">
            {props?.download_Two}
          </Button>
        </div>
      </div>
    </>
  );
};

CardsColumnthebandmusical.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
  get_It: "Get it",
  download_Two: "Download",
};

export default CardsColumnthebandmusical;
