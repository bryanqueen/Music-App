import React from "react";

import { Img } from "components";

const UIControlsTypewithfill = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.thebandband ? (
          <Img
            src={props?.thebandband}
            className="h-[24px] md:h-[auto] object-cover w-[24px]"
            alt="thebandband"
          />
        ) : null}
      </div>
    </>
  );
};

UIControlsTypewithfill.defaultProps = {};

export default UIControlsTypewithfill;
