import React from "react";

import { Img, Text, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";

const UIControlsStatussignedin = (props) => {
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
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.blush_Three}
            </Text>
          </div>
        </div>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex gap-[8px] p-[12px] rounded-[4px] md:w-[100%] w-[38%]"
          className="font-bold font-inter p-[0] placeholder:text-bluegray_600 text-[14px] text-bluegray_600 text-left w-[100%]"
          name="input"
          placeholder="Search"
          prefix={
            <Img
              src="images/img_search.svg"
              className="cursor-pointer my-[1px]"
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
          <Img
            src="images/img_favorite.svg"
            className="h-[24px] w-[24px]"
            alt="favorite"
          />
          <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-inter font-normal min-w-[104px] not-italic px-[16px] py-[8px] rounded-[4px] text-[16px] text-center text-gray_900 tracking-[-0.50px] w-[auto]">
            {props?.download}
          </Button>
          <Text
            className="bg-white_A700 border-[1px] border-bluegray_600 border-solid flex font-gordita font-normal h-[40px] items-center justify-center rounded-[50%] text-center text-gray_900 tracking-[0.13px] w-[40px]"
            variant="body6"
          >
            {props?.frameTwentyOne}
          </Text>
        </div>
      </div>
    </>
  );
};

UIControlsStatussignedin.defaultProps = {
  blush: "Blush",
  blush_One: "Collections",
  blush_Two: "Artists",
  blush_Three: "Your Stuff",
  download: "Download",
  frameTwentyOne: "ZT",
};

export default UIControlsStatussignedin;
