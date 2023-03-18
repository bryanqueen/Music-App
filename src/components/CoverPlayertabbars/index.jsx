import React from "react";

import { List, Img } from "components";

const CoverPlayertabbars = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row h-[120px] md:h-[auto] items-start justify-between sm:px-[20px] px-[22.31px] w-[353px]">
          <List
            className="sm:flex-col flex-row gap-[3px] grid grid-cols-2 w-[67%]"
            orientation="horizontal"
          >
            <div className="flex h-[75px] md:h-[auto] items-center justify-center w-[101px]">
              <div className="flex h-[100%] items-center justify-center p-[3.72px] w-[100%]">
                <Img
                  src={props?.airplane}
                  className="h-[34px] w-[34px]"
                  alt="airplane"
                />
              </div>
            </div>
            <div className="flex h-[75px] md:h-[auto] items-center justify-center w-[101px]">
              <div className="flex h-[100%] items-center justify-center p-[3.72px] w-[100%]">
                <Img
                  src={props?.airplane}
                  className="h-[34px] w-[34px]"
                  alt="airplane"
                />
              </div>
            </div>
          </List>
          <div className="flex h-[74px] md:h-[auto] items-center justify-center w-[99px]">
            <div className="flex h-[100%] items-center justify-center p-[3.72px] w-[100%]">
              <Img
                src={props?.airplane}
                className="h-[34px] w-[34px]"
                alt="airplane"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CoverPlayertabbars.defaultProps = {
  favorite: "images/img_airplane.svg",
  menu: "images/img_airplane.svg",
  airplane: "images/img_airplane.svg",
};

export default CoverPlayertabbars;
