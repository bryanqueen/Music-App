import React from "react";

import { Img } from "components";

const UIControlsColumnmap = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange_200 flex h-[80px] md:h-[auto] items-center justify-center p-[16px] rounded-[50%] w-[80px]">
          <Img src={props?.map} className="h-[32px] w-[32px]" alt="map" />
        </div>
      </div>
    </>
  );
};

UIControlsColumnmap.defaultProps = { map: "images/img_map.svg" };

export default UIControlsColumnmap;
