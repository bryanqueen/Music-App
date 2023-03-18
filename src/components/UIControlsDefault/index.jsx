import React from "react";

import { Button, Img } from "components";

const UIControlsDefault = (props) => {
  return (
    <>
      <Button className={props.className}>
        <Img src="images/img_default.png" className="h-[22px]" alt="default" />
      </Button>
    </>
  );
};

UIControlsDefault.defaultProps = {};

export default UIControlsDefault;
