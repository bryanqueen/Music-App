import React from "react";

import { Text, Img } from "components";

const CardsModelightmode = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
            variant="body8"
          >
            {props?.cameronwilliams_One}
          </Text>
          <Text
            className="font-poppins leading-[128.00%] md:max-w-[100%] max-w-[208px] text-black_900 text-left tracking-[-0.50px]"
            as="h6"
            variant="h6"
          >
            {props?.timeZone}
          </Text>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-start justify-start p-[4px] rounded-[50%] w-[40px]">
            <Img
              src="images/img_thebandspotand.png"
              className="h-[32px] md:h-[auto] object-cover w-[32px]"
              alt="thebandspotand"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.darlenerobertso_One}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-bluegray_600 text-left w-[auto]"
              variant="body8"
            >
              {props?.subtitle}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CardsModelightmode.defaultProps = {
  cameronwilliams_One: "Cameron Williamson",
  timeZone: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do",
  darlenerobertso_One: "Darlene Robertson",
  subtitle: "(684) 555-0102",
};

export default CardsModelightmode;
