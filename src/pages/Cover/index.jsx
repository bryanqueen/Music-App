import React from "react";

import CoverLogo from "components/CoverLogo";
import { Text, Img, Button } from "components";
import UIControlsTypewithfill from "components/UIControlsTypewithfill";
import UIControlsButtonarrow from "components/UIControlsButtonarrow";
import UIControlsPlayerimage from "components/UIControlsPlayerimage";
import UIControlsColumnmap from "components/UIControlsColumnmap";
import CoverPlayertabbars from "components/CoverPlayertabbars";
import CardsColumnthebandbandprac from "components/CardsColumnthebandbandprac";

const CoverPage = () => {
  return (
    <>
      <div className="bg-deep_purple_500 flex font-poppins mx-[auto] relative w-[100%]">
        <div className="h-[1354px] md:h-[696px] sm:h-[966px] mt-[auto] md:px-[20px] md:w-[100%] w-[47%]">
          <div className="absolute flex flex-col gap-[29px] items-start justify-start right-[0] self-stretch top-[23%] w-[auto]">
            <CoverLogo className="flex flex-row items-center justify-start md:w-[100%] w-[38%]" />
            <Text
              className="leading-[106.00%] md:max-w-[100%] max-w-[599px] text-left text-white_A700 tracking-[2.32px]"
              variant="body9"
            >
              Music App UI
            </Text>
          </div>
          <div className="absolute h-[1354px] md:h-[696px] sm:h-[966px] inset-[0] justify-center m-[auto] md:w-[100%] w-[99%]">
            <div className="h-[1354px] md:h-[696px] m-[auto] w-[100%]">
              <div className="h-[1354px] md:h-[696px] m-[auto] w-[100%]">
                <div className="h-[1354px] md:h-[696px] m-[auto] w-[100%]">
                  <div className="absolute md:h-[696px] h-[964px] left-[2%] top-[0] md:w-[100%] w-[89%]">
                    <div className="absolute md:h-[696px] h-[964px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[96%]">
                      <div className="flex flex-col h-[100%] justify-start m-[auto] w-[100%]">
                        <div className="h-[579px] mr-[296px] relative sm:w-[100%] w-[61%]">
                          <Img
                            src="images/img_thebandbassclef_120x114.png"
                            className="h-[120px] mb-[-25.13px] ml-[106px] mt-[217px] object-cover w-[26%] z-[1]"
                            alt="thebandbassclef"
                          />
                          <Img
                            src="images/img_thebandspeaker_168x194.png"
                            className="h-[168px] mb-[undefinedpx] object-cover w-[44%] z-[1]"
                            alt="thebandspeaker"
                          />
                          <Img
                            src="images/img_thebandspeaker_192x288.png"
                            className="h-[183px] mb-[undefinedpx] ml-[auto] mt-[56px] object-cover w-[48%] z-[1]"
                            alt="thebandspeaker_One"
                          />
                          <Img
                            src="images/img_thebandtreble_267x257.png"
                            className="h-[267px] ml-[4px] mt-[auto] object-cover w-[58%]"
                            alt="thebandtreble"
                          />
                        </div>
                        <Img
                          src="images/img_thebanddotted.png"
                          className="h-[83px] md:h-[auto] md:ml-[0] ml-[205px] mt-[129px] object-cover w-[18%]"
                          alt="thebanddotted"
                        />
                        <Img
                          src="images/img_thebandmicrophone.png"
                          className="h-[124px] md:h-[auto] md:ml-[0] ml-[617px] mt-[48px] object-cover w-[18%]"
                          alt="thebandmicropho"
                        />
                      </div>
                      <Img
                        src="images/img_thebandminim_78x99.png"
                        className="absolute h-[78px] object-cover right-[27%] top-[0] w-[14%]"
                        alt="thebandminim"
                      />
                    </div>
                    <Img
                      src="images/img_thebandminim.png"
                      className="absolute h-[100px] left-[0] object-cover top-[37%] w-[10%]"
                      alt="thebandminim_One"
                    />
                  </div>
                  <Img
                    src="images/img_thebandmelody_307x280.png"
                    className="absolute h-[307px] object-cover right-[0] top-[0] w-[32%]"
                    alt="thebandmelody"
                  />
                  <Img
                    src="images/img_thebandmelody_407x145.png"
                    className="absolute h-[407px] left-[0] object-cover top-[0] w-[17%]"
                    alt="thebandmelody_One"
                  />
                  <Img
                    src="images/img_thebandrectangular_92x325.png"
                    className="absolute h-[92px] left-[29%] object-cover top-[0] w-[37%]"
                    alt="thebandrectangu"
                  />
                  <Img
                    src="images/img_thebandstanding_563x336.png"
                    className="absolute bottom-[0] h-[563px] left-[4%] object-cover w-[38%]"
                    alt="thebandstanding"
                  />
                </div>
                <div className="absolute bottom-[26%] h-[273px] inset-x-[0] mx-[auto] sm:w-[100%] w-[43%]">
                  <Img
                    src="images/img_thebandmelody_273x376.png"
                    className="h-[273px] m-[auto] object-cover w-[100%]"
                    alt="thebandmelody_Two"
                  />
                  <Img
                    src="images/img_polygon1.svg"
                    className="absolute h-[86px] inset-y-[0] my-[auto] right-[18%] w-[auto]"
                    alt="polygonOne"
                  />
                </div>
              </div>
              <Img
                src="images/img_thebandcrotchet.png"
                className="absolute bottom-[32%] h-[145px] left-[4%] object-cover w-[13%]"
                alt="thebandcrotchet"
              />
            </div>
            <div className="absolute flex flex-col gap-[362px] md:gap-[40px] justify-start right-[11%] top-[7%] w-[48%]">
              <Img
                src="images/img_thebandtrumpet_215x250.png"
                className="h-[215px] md:h-[auto] md:ml-[0] ml-[118px] object-cover w-[60%]"
                alt="thebandtrumpet"
              />
              <Img
                src="images/img_thebandguitar_389x422.png"
                className="h-[389px] md:h-[auto] object-cover w-[100%]"
                alt="thebandguitar"
              />
            </div>
            <Img
              src="images/img_thebandviolin_346x309.png"
              className="absolute h-[346px] left-[0] object-cover top-[33%] w-[35%]"
              alt="thebandviolin"
            />
          </div>
        </div>
        <div className="h-[1343px] md:h-[960px] ml-[-280.7px] mt-[auto] md:px-[20px] md:w-[100%] w-[68%] z-[1]">
          <div className="absolute h-[1274px] md:h-[960px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div className="absolute h-[1274px] md:h-[960px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[76%]">
              <div className="absolute h-[1274px] md:h-[960px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[93%]">
                <div className="absolute h-[1274px] md:h-[960px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[85%]">
                  <div className="absolute h-[1205px] md:h-[960px] right-[0] top-[0] sm:w-[100%] w-[74%]">
                    <div className="absolute h-[1205px] md:h-[890px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[93%]">
                      <div className="absolute h-[890px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <div className="absolute h-[890px] inset-y-[0] my-[auto] right-[0] w-[48%]">
                          <div className="bg-white_A700 flex h-[100%] items-center justify-start ml-[auto] rotate-[10deg] rounded-[20px] w-[54%]">
                            <div className="flex items-start justify-start rounded-[20px] self-stretch w-[auto]">
                              <div className="flex items-center justify-center w-[53px]">
                                <div className="flex items-center justify-between w-[11px]">
                                  <div className="flex items-center justify-start self-stretch w-[auto]">
                                    <Img
                                      src="images/img_artistimage.png"
                                      className="h-[73px] md:h-[auto] object-cover rounded-[5px] w-[11px]"
                                      alt="artistimage"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_shadows.png"
                            className="absolute h-[890px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                            alt="shadows"
                          />
                        </div>
                        <div className="absolute bg-white_A700 flex items-center justify-start left-[0] rotate-[10deg] rounded-[20px] top-[0] w-[92%]">
                          <div className="md:h-[109px] h-[419px] relative rounded-[20px] sm:w-[100%] w-[478px]">
                            <div className="absolute bg-deep_purple_A100 flex h-[67px] md:h-[auto] items-center justify-between left-[0] pb-[27.89px] pt-[37.18px] rounded-bl-[37px] rounded-br-[37px] rounded-tl-[0] rounded-tr-[0] self-stretch top-[0] w-[auto]">
                              <div className="flex flex-col items-center justify-center px-[7.44px] w-[351px]">
                                <Text
                                  className="text-gray_900 text-left tracking-[-0.46px] w-[auto]"
                                  variant="body1"
                                >
                                  Chill hits
                                </Text>
                                <Text
                                  className="leading-[150.00%] md:max-w-[100%] max-w-[276px] not-italic text-bluegray_600 text-left"
                                  variant="body7"
                                >
                                  30 songs to sing in the shower
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] md:h-[109px] h-[376px] right-[0] sm:w-[100%] w-[400px]">
                              <div className="absolute md:h-[109px] h-[285px] inset-x-[0] mx-[auto] top-[0] w-[76%]">
                                <div className="absolute md:h-[109px] h-[197px] left-[0] top-[0] w-[95%]">
                                  <div className="absolute flex flex-row items-center justify-between left-[0] top-[0] w-[271px]">
                                    <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                                      <Img
                                        src="images/img_artistimage_73x73.png"
                                        className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                                        alt="artistimage_One"
                                      />
                                      <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                                        <Text
                                          className="text-gray_900 text-left tracking-[-0.46px] w-[auto]"
                                          variant="body5"
                                        >
                                          Willow
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] md:max-w-[100%] max-w-[76px] not-italic text-bluegray_200 text-left"
                                          variant="body7"
                                        >
                                          Taylor Swift
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_options.svg"
                                      className="h-[7px] w-[21px]"
                                      alt="options"
                                    />
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[271px]">
                                    <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                                      <Img
                                        src="images/img_artistimage_1.png"
                                        className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                                        alt="artistimage_Two"
                                      />
                                      <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                                        <Text
                                          className="leading-[22.00px] md:max-w-[100%] max-w-[160px] text-gray_900 text-left tracking-[-0.46px]"
                                          variant="body5"
                                        >
                                          I don’t care (Acoustic)
                                        </Text>
                                        <Text
                                          className="leading-[150.00%] md:max-w-[100%] max-w-[75px] not-italic text-bluegray_200 text-left"
                                          variant="body7"
                                        >
                                          Ed Sheeran
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_options.svg"
                                      className="h-[7px] w-[21px]"
                                      alt="options_One"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[271px]">
                                  <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                                    <Img
                                      src="images/img_artistimage_2.png"
                                      className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                                      alt="artistimage_Three"
                                    />
                                    <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="leading-[22.00px] md:max-w-[100%] max-w-[146px] text-gray_900 text-left tracking-[-0.46px]"
                                        variant="body5"
                                      >
                                        Put Your Records On
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] md:max-w-[100%] max-w-[83px] not-italic text-bluegray_200 text-left"
                                        variant="body7"
                                      >
                                        Ritt Momney
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_options.svg"
                                    className="h-[7px] w-[21px]"
                                    alt="options_Two"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[10%] w-[271px]">
                                <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                                  <Img
                                    src="images/img_artistimage_69x73.png"
                                    className="h-[69px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                                    alt="artistimage_Four"
                                  />
                                  <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="leading-[22.00px] md:max-w-[100%] max-w-[104px] text-gray_900 text-left tracking-[-0.46px]"
                                      variant="body5"
                                    >
                                      Love Like That
                                    </Text>
                                    <Text
                                      className="not-italic text-bluegray_200 text-left w-[auto]"
                                      variant="body7"
                                    >
                                      Lauv
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_options.svg"
                                  className="h-[7px] w-[21px]"
                                  alt="options_Three"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-white_A700 bottom-[0] md:h-[639px] sm:h-[751px] h-[805px] pt-[40px] right-[0] rotate-[10deg] rounded-[20px] sm:w-[100%] w-[73%]">
                        <div className="absolute bottom-[0] flex flex-col gap-[152px] md:gap-[40px] inset-x-[0] items-end justify-start mx-[auto] w-[100%]">
                          <Img
                            src="images/img_thebandspotand_506x378.png"
                            className="h-[506px] sm:h-[auto] object-cover w-[100%]"
                            alt="thebandspotand"
                          />
                          <Img
                            src="images/img_homebar.png"
                            className="h-[93px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                            alt="homebar"
                          />
                        </div>
                        <div className="absolute bottom-[0] flex flex-col md:h-[auto] inset-x-[0] mx-[auto] pb-[29.75px] pt-[14.87px] px-[14.87px] sm:w-[100%] w-[371px]">
                          <div className="md:h-[451px] h-[617px] ml-[auto] w-[96%]">
                            <div className="absolute flex items-center justify-start left-[0] pl-[7.44px] top-[0] w-[339px]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="md:h-[130px] h-[196px] py-[14.87px] relative w-[100%]">
                                  <div className="absolute md:h-[34px] h-[47px] left-[1%] top-[26%] w-[107px]">
                                    <UIControlsTypewithfill className="absolute bg-deep_purple_A100 bottom-[0] flex h-[34px] items-center justify-center left-[0] p-[4px] rounded-[8px] w-[34px]" />
                                    <Text
                                      className="absolute right-[0] text-blue_100 text-left top-[0] tracking-[-0.46px] w-[auto]"
                                      variant="body3"
                                    >
                                      Musical
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] leading-[128.00%] md:max-w-[100%] max-w-[320px] mx-[auto] text-gray_900 text-left tracking-[-0.93px]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Let the music take you away...
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex h-[451px] md:h-[auto] items-center justify-center pb-[22.31px] pt-[14.87px] right-[0] w-[100%]">
                              <Img
                                src="images/img_thebandspeaker_365x304.png"
                                className="h-[365px] md:h-[auto] object-cover w-[304px]"
                                alt="thebandspeaker_Two"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-center ml-[auto] mt-[-31.85px] px-[14.87px] py-[7.44px] w-[100%] z-[1]">
                            <UIControlsButtonarrow className="bg-gray_800 flex flex-col items-center justify-center p-[16px] rounded-[34px] sm:w-[100%] w-[69px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_shadows.png"
                      className="absolute h-[960px] left-[0] object-cover top-[0] w-[auto]"
                      alt="shadows_One"
                    />
                  </div>
                  <div className="absolute bg-orange_200 bottom-[0] flex md:h-[249px] h-[805px] justify-end left-[0] pl-[7px] pt-[7px] rotate-[10deg] rounded-[20px] sm:w-[100%] w-[63%]">
                    <div className="md:h-[249px] h-[764px] mt-[auto] mx-[auto] sm:w-[100%] w-[99%]">
                      <div className="md:h-[249px] h-[764px] m-[auto] w-[100%]">
                        <div className="absolute md:h-[249px] h-[764px] inset-[0] m-[auto] pt-[14.87px] sm:w-[100%] w-[470px]">
                          <div className="absolute flex flex-col md:gap-[40px] h-[98px] md:h-[auto] items-center justify-between left-[1%] px-[14.87px] top-[2%] w-[100%]">
                            <Img
                              src="images/img_checkmark_gray_800.svg"
                              className="h-[34px] w-[34px]"
                              alt="checkmark"
                            />
                            <Img
                              src="images/img_arrowleft.svg"
                              className="h-[34px] w-[34px]"
                              alt="arrowleft"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] h-[100%] md:h-[249px] inset-x-[0] mx-[auto] pt-[44.62px] rounded-[22px] w-[100%]">
                            <div className="absolute md:h-[249px] h-[450px] inset-x-[0] mx-[auto] top-[6%] sm:w-[100%] w-[82%]">
                              <div className="absolute md:h-[249px] h-[355px] left-[0] top-[0] w-[356px]">
                                <UIControlsPlayerimage className="absolute flex flex-col h-[249px] items-center justify-start left-[6%] top-[0] sm:w-[100%] w-[249px]" />
                                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] px-[7.44px] w-[356px]">
                                  <div className="flex items-start justify-center w-[100%]">
                                    <div className="flex flex-col gap-[3.72px] items-center justify-center pb-[13.94px] pt-[7.44px] px-[7.44px] w-[100%]">
                                      <Text
                                        className="leading-[128.00%] md:max-w-[100%] max-w-[326px] text-center text-gray_900 tracking-[-0.46px]"
                                        variant="body1"
                                      >
                                        Get Lucky
                                      </Text>
                                      <Text
                                        className="leading-[150.00%] md:max-w-[100%] max-w-[324px] not-italic text-bluegray_600 text-center"
                                        variant="body7"
                                      >
                                        Daft Punk
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-row gap-[22.31px] items-center justify-center sm:px-[20px] md:px-[40px] px-[44.62px] right-[0] w-[356px]">
                                <Img
                                  src="images/img_rewind.svg"
                                  className="h-[25px] w-[25px]"
                                  alt="rewind"
                                />
                                <UIControlsColumnmap className="flex flex-col h-[86px] md:h-[auto] items-start justify-start sm:w-[100%] w-[86px]" />
                                <Img
                                  src="images/img_forward.svg"
                                  className="h-[25px] w-[25px]"
                                  alt="forward"
                                />
                              </div>
                            </div>
                            <div className="absolute bottom-[18%] flex flex-row gap-[7.44px] items-center justify-center sm:px-[20px] md:px-[40px] px-[44.62px] py-[14.87px] right-[5%] w-[350px]">
                              <Text
                                className="not-italic text-bluegray_600 text-right w-[auto]"
                                variant="body10"
                              >
                                3:05
                              </Text>
                              <Img
                                src="images/img_volumelevel_bluegray_100.svg"
                                className="h-[49px] w-[191px]"
                                alt="volumelevel"
                              />
                              <Text
                                className="not-italic text-bluegray_600 text-left w-[auto]"
                                variant="body10"
                              >
                                4:08
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_homebar_bluegray_200.svg"
                          className="absolute bottom-[0] h-[93px] right-[0] w-[auto]"
                          alt="homebar_One"
                        />
                      </div>
                      <CoverPlayertabbars className="absolute bg-orange_200 bottom-[0] flex flex-col h-[150px] md:h-[auto] items-center justify-start pt-[8px] px-[16px] right-[3%] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] sm:w-[100%] w-[358px]" />
                    </div>
                    <Img
                      src="images/img_homebar_bluegray_200.svg"
                      className="absolute bottom-[0] h-[93px] right-[0] w-[auto]"
                      alt="homebar_Two"
                    />
                  </div>
                </div>
                <div className="absolute bg-white_A700 flex items-center justify-start left-[0] pl-[11px] rotate-[10deg] rounded-[20px] top-[0] w-[53%]">
                  <div className="flex h-[488px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22.31px] sm:w-[100%] w-[465px]">
                    <div className="flex flex-col relative sm:w-[100%] w-[431px]">
                      <div className="flex items-center justify-start mx-[auto] self-stretch w-[auto]">
                        <div className="flex relative sm:w-[100%] w-[412px]">
                          <CardsColumnthebandbandprac
                            className="bg-white_A700 h-[240px] my-[auto] rounded-[16px] shadow-bs sm:w-[100%] w-[279px]"
                            thebandbandprac="images/img_thebandviolin_155x248.png"
                            label_One="30 songs for an acoustic afternoon"
                            supertitle_One="Classic Hits"
                          />
                          <CardsColumnthebandbandprac
                            className="bg-white_A700 h-[195px] ml-[-32.48px] rounded-[16px] shadow-bs sm:w-[100%] w-[165px] z-[1]"
                            thebandbandprac="images/img_thebandmusical_110x156.png"
                            label_One="30 songs for an acoustic afternoon"
                            supertitle_One="Acoustic Guitar"
                          />
                        </div>
                      </div>
                      <div className="md:h-[205px] h-[302px] ml-[auto] mt-[-54.55px] w-[362px] z-[1]">
                        <Text
                          className="absolute leading-[128.00%] left-[0] md:max-w-[100%] max-w-[134px] text-black_900 text-center top-[0] tracking-[-0.46px]"
                          variant="body1"
                        >
                          Top Albums
                        </Text>
                        <div className="absolute bottom-[0] h-[259px] inset-x-[0] mx-[auto] w-[354px]">
                          <div className="h-[259px] m-[auto] w-[100%]">
                            <div className="absolute bottom-[0] flex items-center justify-start left-[0] self-stretch w-[auto]">
                              <CardsColumnthebandbandprac
                                className="bg-white_A700 h-[221px] relative rounded-[16px] shadow-bs sm:w-[100%] w-[247px]"
                                label_One="30 songs for an acoustic afternoon"
                              />
                            </div>
                            <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] self-stretch w-[auto]">
                              <CardsColumnthebandbandprac
                                className="bg-white_A700 h-[259px] relative rounded-[16px] shadow-bs sm:w-[100%] w-[146px]"
                                label_One="30 songs for an acoustic afternoon"
                                supertitle_One="Acoustic Guitar"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_homebar_bluegray_200.svg"
                            className="absolute bottom-[0] h-[89px] inset-x-[0] mx-[auto] w-[auto]"
                            alt="homebar_Three"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_shadows.png"
                className="absolute h-[960px] left-[0] object-cover top-[0] w-[auto]"
                alt="shadows_Two"
              />
            </div>
            <div className="absolute bg-deep_purple_A100 flex items-center justify-start left-[0] pl-[7px] rotate-[10deg] rounded-[20px] top-[0] w-[37%]">
              <div className="md:h-[164px] h-[557px] pt-[14.87px] relative sm:w-[100%] w-[470px]">
                <div className="md:h-[164px] h-[557px] m-[auto] sm:w-[100%] w-[98%]">
                  <div className="md:h-[164px] h-[557px] m-[auto] w-[100%]">
                    <div className="bg-white_A700 h-[100%] md:h-[164px] m-[auto] pt-[44.62px] rounded-[22px] w-[100%]">
                      <div className="absolute md:h-[164px] h-[365px] inset-x-[0] mx-[auto] top-[8%] sm:w-[100%] w-[82%]">
                        <div className="absolute md:h-[164px] h-[270px] left-[0] top-[0] w-[96%]">
                          <UIControlsPlayerimage className="absolute flex flex-col items-center justify-start left-[6%] top-[0] sm:w-[100%] w-[auto]" />
                          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] px-[7.44px] w-[356px]">
                            <div className="flex items-start justify-center w-[100%]">
                              <div className="flex flex-col gap-[3.72px] items-center justify-center pb-[13.94px] pt-[7.44px] px-[7.44px] w-[100%]">
                                <Text
                                  className="leading-[128.00%] md:max-w-[100%] max-w-[326px] text-center text-gray_900 tracking-[-0.46px]"
                                  variant="body1"
                                >
                                  Put Your Records On
                                </Text>
                                <Text
                                  className="leading-[150.00%] md:max-w-[100%] max-w-[324px] not-italic text-bluegray_600 text-center"
                                  variant="body7"
                                >
                                  Ritt Momney
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-row gap-[22.31px] items-center justify-center sm:px-[20px] md:px-[40px] px-[44.62px] right-[0] w-[356px]">
                          <Img
                            src="images/img_rewind.svg"
                            className="h-[25px] w-[25px]"
                            alt="rewind_One"
                          />
                          <UIControlsColumnmap className="flex flex-col h-[86px] md:h-[auto] items-start justify-start sm:w-[100%] w-[86px]" />
                          <Img
                            src="images/img_forward.svg"
                            className="h-[25px] w-[25px]"
                            alt="forward_One"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[23%] flex flex-row gap-[7.44px] items-center justify-center sm:px-[20px] md:px-[40px] px-[44.62px] py-[14.87px] right-[5%] w-[350px]">
                        <Text
                          className="not-italic text-bluegray_600 text-right w-[auto]"
                          variant="body10"
                        >
                          2:41
                        </Text>
                        <Img
                          src="images/img_volumelevel_bluegray_100.svg"
                          className="h-[49px] w-[191px]"
                          alt="volumelevel_One"
                        />
                        <Text
                          className="not-italic text-bluegray_600 text-left w-[auto]"
                          variant="body10"
                        >
                          3:30
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_homebar_bluegray_200.svg"
                      className="absolute bottom-[0] h-[93px] right-[0] w-[auto]"
                      alt="homebar_Four"
                    />
                  </div>
                  <CoverPlayertabbars className="absolute bg-deep_purple_A100 bottom-[0] flex flex-col h-[150px] md:h-[auto] items-center justify-start pt-[8px] px-[16px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] sm:w-[100%] w-[358px]" />
                </div>
                <Img
                  src="images/img_homebar_bluegray_200.svg"
                  className="absolute bottom-[0] h-[93px] right-[0] w-[auto]"
                  alt="homebar_Five"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex items-center justify-start left-[11%] rotate-[10deg] rounded-[20px] w-[37%]">
            <div className="md:h-[301px] h-[805px] relative rounded-[20px] sm:w-[100%] w-[478px]">
              <div className="absolute bg-blue_200 md:h-[301px] h-[452px] left-[0] pb-[27.89px] pt-[37.18px] rounded-bl-[37px] rounded-br-[37px] rounded-tl-[0] rounded-tr-[0] top-[0] sm:w-[100%] w-[413px]">
                <div className="absolute md:h-[301px] h-[331px] inset-x-[0] mx-[auto] top-[8%] sm:w-[100%] w-[94%]">
                  <div className="absolute flex flex-col gap-[194.29px] md:gap-[40px] justify-start left-[4%] self-stretch top-[0] w-[auto]">
                    <div className="flex flex-row gap-[16.73px] items-start justify-start ml-[auto] self-stretch w-[auto]">
                      <Img
                        src="images/img_favorite_black_900.svg"
                        className="h-[34px] w-[34px]"
                        alt="favorite"
                      />
                      <Img
                        src="images/img_checkmark_gray_800.svg"
                        className="h-[34px] w-[34px]"
                        alt="checkmark_One"
                      />
                    </div>
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[34px] w-[34px]"
                      alt="arrowleft_One"
                    />
                  </div>
                  <Img
                    src="images/img_thebandshow_301x386.png"
                    className="absolute bottom-[0] h-[301px] inset-x-[0] mx-[auto] object-cover w-[386px]"
                    alt="thebandshow"
                  />
                </div>
                <div className="absolute bottom-[6%] flex flex-col items-center justify-center px-[7.44px] right-[1%] w-[351px]">
                  <Text
                    className="leading-[128.00%] md:max-w-[100%] max-w-[278px] text-gray_900 text-left tracking-[-0.46px]"
                    variant="body1"
                  >
                    Songs to sing out loud
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-[100%] max-w-[276px] not-italic text-bluegray_600 text-left"
                    variant="body7"
                  >
                    30 songs to sing in the shower
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[109px] h-[376px] right-[0] sm:w-[100%] w-[400px]">
                <div className="absolute md:h-[109px] h-[368px] inset-[0] justify-center m-[auto] w-[80%]">
                  <div className="absolute md:h-[109px] h-[285px] left-[0] top-[0] w-[95%]">
                    <div className="absolute md:h-[109px] h-[197px] left-[0] top-[0] w-[95%]">
                      <div className="absolute flex flex-row items-center justify-between left-[0] top-[0] w-[271px]">
                        <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                          <Img
                            src="images/img_artistimage_3.png"
                            className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                            alt="artistimage_Five"
                          />
                          <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="leading-[22.00px] md:max-w-[100%] max-w-[143px] text-gray_900 text-left tracking-[-0.46px]"
                              variant="body5"
                            >
                              Bohemian Rapsody
                            </Text>
                            <Text
                              className="leading-[150.00%] md:max-w-[100%] max-w-[46px] not-italic text-bluegray_200 text-left"
                              variant="body7"
                            >
                              Queen
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_options.svg"
                          className="h-[7px] w-[21px]"
                          alt="options_Four"
                        />
                      </div>
                      <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[271px]">
                        <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                          <Img
                            src="images/img_artistimage_4.png"
                            className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                            alt="artistimage_Six"
                          />
                          <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="leading-[22.00px] md:max-w-[100%] max-w-[149px] text-gray_900 text-left tracking-[-0.46px]"
                              variant="body5"
                            >
                              I will always love you
                            </Text>
                            <Text
                              className="leading-[150.00%] md:max-w-[100%] max-w-[112px] not-italic text-bluegray_200 text-left"
                              variant="body7"
                            >
                              Whitney Houston
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_options.svg"
                          className="h-[7px] w-[21px]"
                          alt="options_Five"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[271px]">
                      <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                        <Img
                          src="images/img_artistimage_5.png"
                          className="h-[73px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                          alt="artistimage_Seven"
                        />
                        <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="text-gray_900 text-left tracking-[-0.46px] w-[auto]"
                            variant="body5"
                          >
                            All Star
                          </Text>
                          <Text
                            className="leading-[150.00%] md:max-w-[100%] max-w-[92px] not-italic text-bluegray_200 text-left"
                            variant="body7"
                          >
                            Smash Mouth
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_options.svg"
                        className="h-[7px] w-[21px]"
                        alt="options_Six"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[271px]">
                    <div className="flex flex-row gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_artistimage_6.png"
                        className="h-[69px] md:h-[auto] object-cover rounded-[7px] w-[73px]"
                        alt="artistimage_Eight"
                      />
                      <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                        <Text
                          className="leading-[22.00px] md:max-w-[100%] max-w-[113px] text-gray_900 text-left tracking-[-0.46px]"
                          variant="body5"
                        >
                          Dancing Queen
                        </Text>
                        <Text
                          className="leading-[150.00%] md:max-w-[100%] max-w-[37px] not-italic text-bluegray_200 text-left"
                          variant="body7"
                        >
                          ABBA
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_options.svg"
                      className="h-[7px] w-[21px]"
                      alt="options_Seven"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col md:gap-[40px] items-center justify-between right-[6%] w-[271px]">
                  <div className="flex flex-col gap-[13.94px] items-center justify-start self-stretch w-[auto]">
                    <div className="flex flex-col gap-[2.79px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="text-gray_900 text-left tracking-[-0.46px] w-[auto]"
                        variant="body3"
                      >
                        Title
                      </Text>
                      <Text
                        className="not-italic text-bluegray_200 text-left w-[auto]"
                        variant="body7"
                      >
                        Subtitle
                      </Text>
                    </div>
                    <div className="bg-orange_51 h-[1px] w-[55%]"></div>
                  </div>
                  <Img
                    src="images/img_options_bluegray_600.svg"
                    className="h-[1px] w-[21px]"
                    alt="options_Eight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
