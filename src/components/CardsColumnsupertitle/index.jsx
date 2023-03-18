import React from "react";

import { Text, Img, Button } from "components";

const CardsColumnsupertitle = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-poppins text-black_900 text-left tracking-[-0.50px] w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.supertitle}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.label}
          </Text>
        </div>
        <div className="bg-bluegray_50 flex h-[200px] md:h-[auto] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
          <Img
            src="images/img_thebandconcert.png"
            className="h-[100%] md:h-[auto] object-cover w-[100%]"
            alt="thebandconcert"
          />
        </div>
        <Button className="bg-gray_900 cursor-pointer font-inter font-normal min-w-[90px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
          {props?.download}
        </Button>
      </div>
    </>
  );
};

CardsColumnsupertitle.defaultProps = {
  supertitle: "Super Title",
  label: "Label",
  download: "Download",
};

export default CardsColumnsupertitle;
