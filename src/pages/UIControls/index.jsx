import React from "react";

import UIControlsColumnlabel from "components/UIControlsColumnlabel";
import UIControlsColumnlabelOne from "components/UIControlsColumnlabelOne";
import UIControlsTypeinputwith from "components/UIControlsTypeinputwith";
import {
  Input,
  Img,
  RadioGroup,
  Radio,
  Button,
  Switch,
  List,
} from "components";
import UIControlsTypestepper from "components/UIControlsTypestepper";
import UIControlsStatedefault from "components/UIControlsStatedefault";
import UIControlsStateactive from "components/UIControlsStateactive";
import UIControlsStatedisabled from "components/UIControlsStatedisabled";
import UIControlsLevelfullwidth from "components/UIControlsLevelfullwidth";
import UIControlsRowthebandband from "components/UIControlsRowthebandband";
import UIControlsStatussignedin from "components/UIControlsStatussignedin";
import UIControlsDefault from "components/UIControlsDefault";
import UIControlsTypewithfill from "components/UIControlsTypewithfill";
import UIControlsTypeproitem from "components/UIControlsTypeproitem";
import UIControlsTypedefault from "components/UIControlsTypedefault";
import UIControlsTypesmall from "components/UIControlsTypesmall";
import UIControlsPropertysmall from "components/UIControlsPropertysmall";
import UIControlsPropertydefaul from "components/UIControlsPropertydefaul";
import UIControlsTypeoverflow from "components/UIControlsTypeoverflow";
import UIControlsTypecta from "components/UIControlsTypecta";
import UIControlsRowthebandmelody from "components/UIControlsRowthebandmelody";
import UIControlsRowtitleThree from "components/UIControlsRowtitleThree";
import UIControlsTag from "components/UIControlsTag";
import UIControlsButtonarrow from "components/UIControlsButtonarrow";
import UIControlsColumnlabelEleven from "components/UIControlsColumnlabelEleven";
import UIControlsColumnmap from "components/UIControlsColumnmap";
import UIControlsColumnplay from "components/UIControlsColumnplay";
import UIControlsStackslider from "components/UIControlsStackslider";
import UIControlsPlayerimage from "components/UIControlsPlayerimage";

const UIControlsPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter gap-[48px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-row gap-[16px] items-start justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <UIControlsColumnlabel
            className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            label="Active"
          />
          <UIControlsColumnlabelOne
            className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            label_One="Inactive"
          />
        </div>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex md:flex-col flex-row gap-[48px] items-end justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch md:w-[100%] w-[auto]">
          <UIControlsTypeinputwith
            className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            label_Two="Label"
          />
          <Input
            wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex p-[12px] rounded-[4px] md:w-[100%] w-[215px]"
            className="font-bold p-[0] placeholder:text-black_900 text-[14px] text-black_900 text-left w-[100%]"
            name="typetextinput"
            placeholder="Value"
            suffix={
              <Img
                src="images/img_lock.svg"
                className="ml-[35px] my-[1px]"
                alt="lock"
              />
            }
          ></Input>
          <UIControlsTypestepper
            className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex flex-row items-center justify-start px-[8px] py-[4px] rounded-[4px] sm:w-[100%] w-[231px]"
            value="Value"
          />
        </div>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-row gap-[40px] items-start justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <UIControlsStatedefault
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            label_Three="Default"
          />
          <UIControlsStateactive
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            label_Four="Active"
          />
          <UIControlsStatedisabled
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            label_Five="Disabled"
          />
        </div>
        <RadioGroup
          className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex gap-[40px] items-start justify-start p-[16px] rounded-[16px] self-stretch w-[auto]"
          name="radio"
        >
          <Radio
            value="Default"
            className="font-bold text-[14px] text-gray_900 text-left"
            inputClassName="bg-white_A700 border-[1px] border-black_900 border-solid h-[16px] mr-[5px] rounded-[8px] w-[16px]"
            checked={false}
            name="radio"
            label="Default"
            id="Default"
          ></Radio>
          <Radio
            value="Active"
            className="font-bold text-[14px] text-gray_900 text-left"
            inputClassName="bg-white_A700 border-[4px] border-indigo_A700 border-solid h-[16px] mr-[5px] rounded-[8px] w-[16px]"
            checked={false}
            name="radio"
            label="Active"
            id="Active"
          ></Radio>
          <Radio
            value="Disabled"
            className="font-bold text-[14px] text-bluegray_600 text-left"
            inputClassName="bg-bluegray_50 border-[1px] border-bluegray_600 border-solid h-[16px] mr-[5px] rounded-[8px] w-[16px]"
            checked={false}
            name="radio"
            label="Disabled"
            id="Disabled"
          ></Radio>
        </RadioGroup>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-row gap-[16px] items-center justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <Button
            className="bg-gray_300 cursor-pointer flex items-center justify-center min-w-[101px] p-[4px] rounded-[4px] w-[auto]"
            rightIcon={
              <Img
                src="images/img_plus.svg"
                className="ml-[8px] my-[1px]"
                alt="plus"
              />
            }
          >
            <div className="font-bold text-[14px] text-black_900 text-left">
              Character
            </div>
          </Button>
          <Button
            className="bg-gray_300 cursor-pointer flex items-center justify-center min-w-[101px] p-[4px] rounded-[4px] w-[auto]"
            rightIcon={
              <Img
                src="images/img_plus.svg"
                className="ml-[8px] my-[1px]"
                alt="plus"
              />
            }
          >
            <div className="font-bold text-[14px] text-bluegray_600 text-left">
              Character
            </div>
          </Button>
        </div>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-row gap-[16px] items-center justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <Switch
            onColor="#000000"
            offColor="#dadada"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={false}
            className="w-[22%]"
          />
          <Switch
            onColor="#000000"
            offColor="#dadada"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={true}
            className="w-[22%]"
          />
          <Switch
            onColor="#000000"
            offColor="#dadada"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={false}
            className="w-[18%]"
          />
          <Switch
            onColor="#000000"
            offColor="#dadada"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={true}
            className="w-[14%]"
          />
        </div>
        <div className="flex items-center w-[100%]">
          <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex items-center justify-start max-w-[1198px] p-[16px] rounded-[16px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between max-w-[1166px] mx-[auto] md:px-[20px] w-[100%]">
              <Button className="bg-gray_900 cursor-pointer font-normal min-w-[73px] md:mt-[0] my-[16px] not-italic px-[8px] py-[4px] rounded-[4px] text-[12px] text-center text-white_A700 w-[auto]">
                Download
              </Button>
              <Button className="bg-gray_900 cursor-pointer font-normal min-w-[90px] md:mt-[0] my-[12px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
                Download
              </Button>
              <Button className="bg-gray_900 cursor-pointer font-normal min-w-[104px] md:mt-[0] my-[8px] not-italic px-[16px] py-[8px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
                Download
              </Button>
              <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[73px] md:mt-[0] my-[16px] not-italic px-[8px] py-[4px] rounded-[4px] text-[12px] text-center text-gray_900 w-[auto]">
                Download
              </Button>
              <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[90px] md:mt-[0] my-[12px] not-italic px-[12px] py-[8px] rounded-[4px] text-[14px] text-center text-gray_900 w-[auto]">
                Download
              </Button>
              <Button className="bg-white_A700 border-[1px] border-gray_900 border-solid cursor-pointer font-normal min-w-[104px] md:mt-[0] my-[8px] not-italic px-[16px] py-[8px] rounded-[4px] text-[16px] text-center text-gray_900 tracking-[-0.50px] w-[auto]">
                Download
              </Button>
              <Button className="bg-bluegray_100 cursor-pointer font-normal min-w-[92px] md:mt-[0] my-[16px] not-italic px-[8px] py-[4px] rounded-[4px] text-[12px] text-bluegray_600 text-center w-[auto]">
                Disable Small
              </Button>
              <Button className="bg-bluegray_100 cursor-pointer font-normal min-w-[138px] md:mt-[0] my-[12px] not-italic px-[16px] py-[8px] rounded-[4px] text-[14px] text-bluegray_600 text-center w-[auto]">
                Disabled Button
              </Button>
              <Button className="bg-bluegray_100 cursor-pointer font-normal min-w-[155px] md:mt-[0] my-[8px] not-italic sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[16px] text-bluegray_600 text-center tracking-[-0.50px] w-[auto]">
                Disabled Large
              </Button>
              <UIControlsLevelfullwidth
                className="flex flex-1 flex-col items-center justify-center p-[16px] w-[100%]"
                label_Nine="Button"
              />
            </div>
          </div>
        </div>
        <List
          className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex-col gap-[48px] grid items-start p-[16px] md:px-[20px] rounded-[16px] self-stretch md:w-[100%] w-[auto]"
          orientation="vertical"
        >
          <UIControlsRowthebandband
            className="flex flex-row flex-wrap items-center justify-start max-w-[1024px] my-[0] px-[12px] py-[8px] w-[100%]"
            blush="Blush"
            blush_One="Collections"
            blush_Two="Artists"
            sign_In="Sign In"
          />
          <UIControlsStatussignedin
            className="flex flex-row flex-wrap items-center justify-start max-w-[1024px] my-[0] px-[12px] py-[8px] w-[100%]"
            blush="Blush"
            blush_One="Collections"
            blush_Two="Artists"
            blush_Three="Your Stuff"
            download="Download"
            frameTwentyOne="ZT"
          />
        </List>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-row gap-[48px] items-center justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <UIControlsDefault className="flex h-[32px] items-center justify-center p-[5px] rounded-[8px] w-[32px]" />
          <UIControlsTypewithfill
            className="bg-pink_50 flex flex-col h-[32px] items-center justify-start p-[4px] rounded-[8px] sm:w-[100%] w-[32px]"
            thebandband="images/img_default.png"
          />
        </div>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-col gap-[24px] items-start justify-start p-[16px] md:px-[20px] rounded-[16px] sm:w-[100%] w-[431px]">
          <Input
            wrapClassName="bg-teal_100 flex p-[8px] rounded-[8px] w-[100%]"
            className="font-bold p-[0] placeholder:text-gray_900 text-[12px] text-gray_900 text-left w-[100%]"
            name="property1sucess"
            placeholder="This is a success toast notification."
            prefix={
              <Img
                src="images/img_checkmark_gray_900.svg"
                className="mt-[1px] mb-[auto] mr-[8px]"
                alt="checkmark"
              />
            }
            suffix={
              <Img
                src="images/img_close.svg"
                className="mt-[1px] mb-[auto] ml-[35px]"
                alt="close"
              />
            }
          ></Input>
          <Input
            wrapClassName="bg-teal_50 flex p-[8px] rounded-[8px] w-[100%]"
            className="font-bold p-[0] placeholder:text-gray_900 text-[12px] text-gray_900 text-left w-[100%]"
            name="property1info"
            placeholder="This is an info toast notification."
            prefix={
              <Img
                src="images/img_info.svg"
                className="mt-[1px] mb-[auto] mr-[8px]"
                alt="info"
              />
            }
            suffix={
              <Img
                src="images/img_close.svg"
                className="mt-[1px] mb-[auto] ml-[35px]"
                alt="close"
              />
            }
          ></Input>
          <Input
            wrapClassName="bg-yellow_100 flex p-[8px] rounded-[8px] w-[100%]"
            className="font-bold p-[0] placeholder:text-gray_900 text-[12px] text-gray_900 text-left w-[100%]"
            name="property1warnin"
            placeholder="This is an info toast notification."
            prefix={
              <Img
                src="images/img_icon.svg"
                className="mt-[1px] mb-[auto] mr-[8px]"
                alt="Icon"
              />
            }
            suffix={
              <Img
                src="images/img_close.svg"
                className="mt-[1px] mb-[auto] ml-[35px]"
                alt="close"
              />
            }
          ></Input>
          <Input
            wrapClassName="bg-red_100 flex p-[8px] rounded-[8px] w-[100%]"
            className="font-bold p-[0] placeholder:text-gray_900 text-[12px] text-gray_900 text-left w-[100%]"
            name="property1error"
            placeholder="This is an error toast notification."
            prefix={
              <Img
                src="images/img_icon.svg"
                className="mt-[1px] mb-[auto] mr-[8px]"
                alt="Icon"
              />
            }
            suffix={
              <Img
                src="images/img_close.svg"
                className="mt-[1px] mb-[auto] ml-[35px]"
                alt="close"
              />
            }
          ></Input>
        </div>
        <div className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex flex-col gap-[49px] items-start justify-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]">
          <UIControlsTypeproitem
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            unlimiteddownlo_One="Unlimited downloads"
          />
          <UIControlsTypedefault
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            unlimiteddownlo_Three="Unlimited downloads"
          />
          <UIControlsTypesmall
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            textvalue="Small List Item"
          />
        </div>
        <List
          className="bg-white_A700 border-[1px] border-indigo_A700 border-solid flex-col gap-[48px] grid items-start p-[16px] md:px-[20px] rounded-[16px] self-stretch w-[auto]"
          orientation="vertical"
        >
          <UIControlsPropertysmall className="bg-white_A700 border-[1px] border-gray_500 border-solid flex flex-col items-start justify-start my-[0] p-[8px] rounded-[8px] self-stretch sm:w-[100%] w-[auto]" />
          <UIControlsPropertydefaul className="bg-white_A700 border-[1px] border-gray_500 border-solid flex flex-col items-start justify-start my-[0] p-[12px] rounded-[8px] self-stretch sm:w-[100%] w-[auto]" />
        </List>
        <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[23px] items-center justify-start p-[16px] md:px-[20px] rounded-[5px] md:w-[100%] w-[30%]">
          <UIControlsTypeoverflow
            className="bg-white_A700 flex flex-row items-center justify-start px-[8px] py-[4px] rounded-[8px] sm:w-[100%] w-[320px]"
            title="Title"
            subtitle="Label"
          />
          <UIControlsTypecta
            className="bg-white_A700 flex flex-row items-center justify-start px-[8px] py-[4px] rounded-[8px] sm:w-[100%] w-[320px]"
            title_One="Title"
            subtitle_One="Label"
            apply="Apply"
          />
          <UIControlsRowthebandmelody
            className="bg-white_A700 flex flex-row items-center justify-start px-[8px] py-[4px] rounded-[8px] sm:w-[100%] w-[320px]"
            title_Two="Title"
            subtitle_Two="Label"
          />
          <UIControlsRowtitleThree
            className="bg-white_A700 flex flex-row items-center justify-start mb-[3px] pl-[16px] pr-[8px] py-[4px] rounded-[8px] sm:w-[100%] w-[320px]"
            title_Three="Title"
            subtitle_Three="Label"
          />
        </div>
        <Button
          className="bg-deep_purple_A100 cursor-pointer flex items-center justify-center min-w-[158px] p-[16px] rounded-[16px] w-[auto]"
          leftIcon={
            <Img
              src="images/img_mountain.svg"
              className="mr-[17px]"
              alt="mountain"
            />
          }
        >
          <div className="font-normal not-italic text-[12px] text-bluegray_600 text-right">
            Mountains
          </div>
        </Button>
        <Button
          className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[119px] px-[16px] py-[8px] rounded-[16px] w-[auto]"
          rightIcon={
            <Img
              src="images/img_close_white_a700.svg"
              className="ml-[4px]"
              alt="close"
            />
          }
        >
          <div className="font-normal not-italic text-[12px] text-left text-white_A700">
            #Mountains
          </div>
        </Button>
        <UIControlsTag
          className="flex flex-col items-center justify-center px-[16px] md:px-[20px] py-[8px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
          label_Ten="Sleep"
        />
        <UIControlsButtonarrow className="bg-gray_800 flex flex-col items-center justify-center p-[16px] md:px-[20px] rounded-[50%] sm:w-[100%] w-[64px]" />
        <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col font-poppins gap-[12px] items-start justify-start p-[11px] md:px-[20px] rounded-[5px] md:w-[100%] w-[9%]">
          <Button className="bg-gray_800 cursor-pointer font-semibold min-w-[75px] md:ml-[0] ml-[9px] mt-[9px] px-[16px] py-[8px] rounded-[16px] text-[16px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
            Sleep
          </Button>
          <UIControlsColumnlabelEleven
            className="flex flex-col items-center justify-center md:ml-[0] ml-[9px] px-[16px] py-[8px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
            label_Eleven="Sleep"
          />
        </div>
        <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[48px] items-center justify-start p-[20px] md:px-[20px] rounded-[5px] md:w-[100%] w-[11%]">
          <UIControlsColumnmap className="flex flex-col h-[80px] md:h-[auto] items-start justify-start sm:w-[100%] w-[80px]" />
          <UIControlsColumnplay className="flex flex-col items-start justify-start sm:w-[100%] w-[80px]" />
        </div>
        <Img
          src="images/img_volumelevel.svg"
          className="h-[16px] w-[223px]"
          alt="volumelevel"
        />
        <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[45px] items-center justify-start p-[20px] md:px-[20px] rounded-[5px] md:w-[100%] w-[23%]">
          <UIControlsStackslider
            className="h-[234px] relative w-[100%]"
            thebandband_One="images/img_default.png"
          />
          <UIControlsPlayerimage className="flex flex-col h-[231px] items-center justify-start sm:w-[100%] w-[231px]" />
        </div>
      </div>
    </>
  );
};

export default UIControlsPage;
