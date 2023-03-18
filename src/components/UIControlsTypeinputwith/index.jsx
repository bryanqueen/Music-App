import React from "react";

import { Text, Input, Img } from "components";

const UIControlsTypeinputwith = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter text-black_900 text-left w-[auto]"
          variant="body6"
        >
          {props?.label_Two}
        </Text>
        <Input
          wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex p-[12px] rounded-[4px] md:w-[100%] w-[198px]"
          className="font-bold font-inter p-[0] placeholder:text-black_900 text-[14px] text-black_900 text-left w-[100%]"
          name="input"
          placeholder="Value"
          suffix={
            <Img
              src="images/img_lock.svg"
              className="ml-[35px] my-[1px]"
              alt="lock"
            />
          }
        ></Input>
      </div>
    </>
  );
};

UIControlsTypeinputwith.defaultProps = { label_Two: "Label" };

export default UIControlsTypeinputwith;
