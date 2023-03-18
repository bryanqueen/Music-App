import React from "react";

import { Text, List, Img } from "components";

const StyleGuidePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins gap-[132px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] px-[115px] sm:px-[20px] md:px-[40px] py-[103px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Text
          className="text-black_900 text-left tracking-[-1.00px] w-[auto]"
          as="h1"
          variant="h1"
        >
          Style Guide
        </Text>
        <div className="flex flex-col font-inter gap-[129px] md:gap-[40px] items-center max-w-[874px] mx-[auto] w-[100%]">
          <div className="flex flex-col gap-[41px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <Text
              className="text-black_900 text-left tracking-[0.21px] w-[auto]"
              as="h6"
              variant="h6"
            >
              Typography
            </Text>
            <List
              className="sm:flex-col flex-row font-poppins md:gap-[40px] gap-[80px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start self-stretch md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="text-gray_901 text-left tracking-[-1.00px] w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Hero
                </Text>
                <Text
                  className="text-gray_901 text-left tracking-[-1.00px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Display 1
                </Text>
                <Text
                  className="text-gray_901 text-left tracking-[-1.00px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Display 2
                </Text>
                <Text
                  className="text-gray_901 text-left tracking-[-1.00px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Display 3
                </Text>
                <Text
                  className="text-gray_901 text-left tracking-[-0.50px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Heading 1
                </Text>
                <Text
                  className="text-gray_901 text-left tracking-[-0.50px] w-[auto]"
                  variant="body2"
                >
                  Heading 2
                </Text>
                <Text
                  className="font-normal not-italic text-gray_901 text-left tracking-[-0.50px] w-[auto]"
                  variant="body4"
                >
                  Paragraph Large
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left tracking-[-0.50px] w-[auto]"
                  variant="body4"
                >
                  Paragraph Large Bold
                </Text>
                <Text
                  className="font-normal not-italic text-gray_901 text-left w-[auto]"
                  variant="body6"
                >
                  Paragraph Medium
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body6"
                >
                  Paragraph Medium Bold
                </Text>
                <Text
                  className="font-normal not-italic text-gray_901 text-left w-[auto]"
                  variant="body8"
                >
                  Paragraph Small
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body8"
                >
                  Paragraph Small Bold
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left tracking-[-0.50px] w-[auto]"
                  variant="body4"
                >
                  Button Large
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body6"
                >
                  Button Medium
                </Text>
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body8"
                >
                  Button Small
                </Text>
              </div>
              <div className="flex flex-col gap-[32px] items-center justify-start self-stretch w-[auto]">
                <Text
                  className="text-center text-gray_901 tracking-[-1.00px] w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Hero
                </Text>
                <Text
                  className="text-center text-gray_901 tracking-[-1.00px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Display 1
                </Text>
                <Text
                  className="text-center text-gray_901 tracking-[-1.00px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Display 2
                </Text>
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="text-center text-gray_901 tracking-[-1.00px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Display 3
                  </Text>
                  <Text
                    className="mt-[25px] text-center text-gray_901 tracking-[-0.50px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Heading 1
                  </Text>
                  <Text
                    className="mt-[25px] text-center text-gray_901 tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Heading 2
                  </Text>
                  <Text
                    className="font-normal mt-[29px] not-italic text-center text-gray_901 tracking-[-0.50px] w-[auto]"
                    variant="body4"
                  >
                    Paragraph Large
                  </Text>
                  <Text
                    className="font-normal mt-[30px] not-italic text-center text-gray_901 w-[auto]"
                    variant="body6"
                  >
                    Paragraph Medium
                  </Text>
                  <Text
                    className="font-normal mt-[31px] not-italic text-center text-gray_901 w-[auto]"
                    variant="body8"
                  >
                    Paragraph Small
                  </Text>
                  <Text
                    className="font-semibold mt-[32px] text-center text-gray_901 tracking-[-0.50px] w-[auto]"
                    variant="body4"
                  >
                    Button Large
                  </Text>
                  <Text
                    className="font-semibold mt-[26px] text-center text-gray_901 w-[auto]"
                    variant="body6"
                  >
                    Button Medium
                  </Text>
                  <Text
                    className="font-semibold mt-[28px] text-center text-gray_901 w-[auto]"
                    variant="body8"
                  >
                    Button Small
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-end justify-start self-stretch w-[auto]">
                <Text
                  className="text-gray_901 text-right tracking-[-1.00px] w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Hero
                </Text>
                <Text
                  className="text-gray_901 text-right tracking-[-1.00px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Display 1
                </Text>
                <Text
                  className="text-gray_901 text-right tracking-[-1.00px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Display 2
                </Text>
                <div className="flex flex-col items-end justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="text-gray_901 text-right tracking-[-1.00px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Display 3
                  </Text>
                  <Text
                    className="mt-[25px] text-gray_901 text-right tracking-[-0.50px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Heading 1
                  </Text>
                  <Text
                    className="mt-[25px] text-gray_901 text-right tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Heading 2
                  </Text>
                  <Text
                    className="font-normal mt-[29px] not-italic text-gray_901 text-right tracking-[-0.50px] w-[auto]"
                    variant="body4"
                  >
                    Paragraph Large
                  </Text>
                  <Text
                    className="font-normal mt-[30px] not-italic text-gray_901 text-right w-[auto]"
                    variant="body6"
                  >
                    Paragraph Medium
                  </Text>
                  <Text
                    className="font-normal mt-[31px] not-italic text-gray_901 text-right w-[auto]"
                    variant="body8"
                  >
                    Paragraph Small
                  </Text>
                  <Text
                    className="font-semibold mt-[32px] text-gray_901 text-right tracking-[-0.50px] w-[auto]"
                    variant="body4"
                  >
                    Button Large
                  </Text>
                  <Text
                    className="font-semibold mt-[26px] text-gray_901 text-right w-[auto]"
                    variant="body6"
                  >
                    Button Medium
                  </Text>
                  <Text
                    className="font-semibold mt-[28px] text-gray_901 text-right w-[auto]"
                    variant="body8"
                  >
                    Button Small
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <Text
              className="text-black_900 text-left tracking-[0.21px] w-[auto]"
              as="h6"
              variant="h6"
            >
              Colors
            </Text>
            <Text
              className="font-semibold text-black_900 text-left tracking-[0.14px] w-[auto]"
              variant="body4"
            >
              Ink
            </Text>
            <Img
              src="images/img_colors.svg"
              className="h-[50px] w-[420px]"
              alt="colors_One"
            />
            <Text
              className="font-semibold text-black_900 text-left tracking-[0.14px] w-[auto]"
              variant="body4"
            >
              Utility
            </Text>
            <div className="flex md:flex-col flex-row gap-[56px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-indigo_A700 h-[50px] rounded-[4px] w-[50px]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                  variant="body4"
                >
                  Active
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-teal_A400 h-[50px] rounded-[4px] w-[50px]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                  variant="body4"
                >
                  Success
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-cyan_200 h-[50px] rounded-[4px] w-[50px]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                  variant="body4"
                >
                  Info
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-orange_A200 h-[50px] rounded-[4px] w-[50px]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                  variant="body4"
                >
                  Warning
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-red_A200 h-[50px] rounded-[4px] w-[50px]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                  variant="body4"
                >
                  Danger Error
                </Text>
              </div>
            </div>
            <Text
              className="font-semibold text-black_900 text-left tracking-[0.14px] w-[auto]"
              variant="body4"
            >
              Accent
            </Text>
            <Img
              src="images/img_styles.svg"
              className="h-[50px] w-[420px]"
              alt="styles"
            />
          </div>
        </div>
        <div className="flex flex-col font-inter gap-[21px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="text-black_900 text-left tracking-[0.21px] w-[auto]"
            as="h6"
            variant="h6"
          >
            Elevations
          </Text>
          <div className="bg-white_A700 h-[90px] rounded-[8px] shadow-bs w-[100%]"></div>
          <div className="bg-white_A700 h-[90px] rounded-[8px] shadow-bs1 w-[100%]"></div>
          <div className="bg-white_A700 h-[90px] rounded-[8px] shadow-bs2 w-[100%]"></div>
          <div className="bg-white_A700 h-[90px] rounded-[8px] shadow-bs3 w-[100%]"></div>
        </div>
      </div>
    </>
  );
};

export default StyleGuidePage;
