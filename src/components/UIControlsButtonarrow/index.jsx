import React from "react";

import { Img } from "components";

const UIControlsButtonarrow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex h-[32px] items-center justify-start w-[32px]">
          {!!props?.arrowright_One ? (
            <Img
              src={props?.arrowright_One}
              className="h-[32px] w-[32px]"
              alt="arrowright_One"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

UIControlsButtonarrow.defaultProps = {};

export default UIControlsButtonarrow;
