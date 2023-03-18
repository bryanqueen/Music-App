import React from "react";

import { Img, Text, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";

const UIControlsRowthebandband = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[32px] items-center justify-start self-stretch w-[auto]">
          <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
            <div className="flex h-[32px] items-center justify-start rounded-[8px] w-[32px]">
              <Img
                src="images/img_thebandband.png"
                className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                alt="thebandband"
              />
            </div>
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.blush}
            </Text>
          </div>
          <div className="flex flex-row gap-[32px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.blush_One}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.blush_Two}
            </Text>
          </div>
        </div>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex gap-[8px] p-[12px] rounded-[4px] md:w-[100%] w-[43%]"
          className="font-bold font-inter p-[0] placeholder:text-bluegray_600 text-[14px] text-bluegray_600 text-left w-[100%]"
          name="input"
          placeholder="Search"
          prefix={
            <Img
              src="images/img_search.svg"
              className="cursor-pointer mr-[8px] my-[1px]"
              alt="search"
            />
          }
          suffix={
            <CloseSVG
              color="#646e77"
              className="cursor-pointer my-[auto]"
              onClick={() => setInputvalue("")}
              style={{
                visibility: inputvalue?.length <= 0 ? "hidden" : "visible",
              }}
            />
          }
        ></Input>
        <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
          <Button className="bg-indigo_A700 cursor-pointer font-inter font-normal min-w-[104px] not-italic px-[16px] py-[8px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
            {props?.download}
          </Button>
          <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-inter font-normal min-w-[81px] not-italic px-[16px] py-[8px] rounded-[4px] text-[16px] text-center text-gray_900 tracking-[-0.50px] w-[auto]">
            {props?.sign_In}
          </Button>
          <Img
            src="images/img_overflowmenu.svg"
            className="h-[32px] w-[32px]"
            alt="overflowmenu"
          />
        </div>
      </div>
    </>
  );
};

UIControlsRowthebandband.defaultProps = {
  blush: "Blush",
  blush_One: "Collections",
  blush_Two: "Artists",
  download: "Download",
  sign_In: "Sign In",
};

export default UIControlsRowthebandband;
