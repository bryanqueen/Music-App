import React from "react";

import CardsColumnsupertitle from "components/CardsColumnsupertitle";
import CardsColumnthebandbandprac from "components/CardsColumnthebandbandprac";
import CardsStackthebandshow from "components/CardsStackthebandshow";
import CardsColumnthebandmusician from "components/CardsColumnthebandmusician";
import CardsColumnthebandmusical from "components/CardsColumnthebandmusical";
import CardsColumnsupertitleTwo from "components/CardsColumnsupertitleTwo";
import CardsColumnthebandsofa from "components/CardsColumnthebandsofa";
import CardsColumnthisisatitleOne from "components/CardsColumnthisisatitleOne";
import CardsColumnthebandparty from "components/CardsColumnthebandparty";
import CardsColumnthebandmusicpra from "components/CardsColumnthebandmusicpra";
import { List } from "components";
import CardsRowthebandtorso from "components/CardsRowthebandtorso";
import CardsColumnthebandspeaker from "components/CardsColumnthebandspeaker";
import CardsRowthebandtable from "components/CardsRowthebandtable";
import CardsRowthebandband from "components/CardsRowthebandband";
import CardsColumn from "components/CardsColumn";
import CardsRowthebandplant from "components/CardsRowthebandplant";
import CardsColumnOne from "components/CardsColumnOne";
import CardsColumnthebandmicropho from "components/CardsColumnthebandmicropho";
import CardsColumnthebandhotcup from "components/CardsColumnthebandhotcup";
import CardsColumnthebanddrum from "components/CardsColumnthebanddrum";
import CardsModelightmode from "components/CardsModelightmode";
import CardsModedarkmode from "components/CardsModedarkmode";
import CardsBigcard from "components/CardsBigcard";
import CardsProperty1small from "components/CardsProperty1small";
import CardsProperty1small1 from "components/CardsProperty1small1";
import CardsProperty1long from "components/CardsProperty1long";
import CardsProperty1long1 from "components/CardsProperty1long1";

const CardsPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins gap-[200px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex items-center w-[100%]">
          <div className="border-[1px] border-deep_purple_A200 border-solid flex items-start justify-start p-[16px] rounded-[5px] self-stretch md:w-[100%] w-[auto]">
            <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[3504px] mx-[auto] md:px-[20px] w-[100%]">
              <CardsColumnsupertitle
                className="bg-white_A700 flex sm:flex-1 flex-col items-start justify-start mb-[49px] p-[16px] rounded-[16px] sm:w-[100%] w-[320px]"
                supertitle="Super Title"
                label="Label"
                download="Download"
              />
              <CardsColumnthebandbandprac
                className="bg-white_A700 flex sm:flex-1 flex-col items-start justify-start mb-[113px] rounded-[16px] sm:w-[100%] w-[320px]"
                thebandbandprac="images/img_thebandbandpractice.png"
                label_One="Label"
                supertitle_One="Super Title"
              />
              <CardsStackthebandshow
                className="h-[396px] relative rounded-[16px] w-[10%] md:w-[100%]"
                thisisatitle="This is a title that looks pretty nice"
                thisisanicesubt_One="This is a nice subtitle or label"
                download_One="Download"
              />
              <CardsColumnthebandmusician
                className="bg-white_A700 flex sm:flex-1 flex-col items-start justify-start mb-[25px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
                thisisanicetitl_One="This is a nice title"
                thisisanicesubt_Three="This is a nice subtitle or label"
              />
              <CardsColumnthebandmusical
                className="bg-white_A700 flex sm:flex-1 flex-col items-start justify-start mb-[49px] p-[16px] rounded-[16px] sm:w-[100%] w-[320px]"
                title="Title"
                subtitle="Subtitle"
                get_It="Get it"
                download_Two="Download"
              />
              <CardsColumnsupertitleTwo
                className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start mb-[49px] p-[16px] rounded-[16px] sm:w-[100%] w-[320px]"
                supertitle_Two="Super Title"
                label_Three="Label"
                download_Three="Download"
              />
              <CardsColumnthebandsofa
                className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start mb-[113px] rounded-[16px] sm:w-[100%] w-[320px]"
                label_Four="Label"
                supertitle_Three="Super Title"
              />
              <CardsColumnthisisatitleOne
                className="bg-gray_900 flex sm:flex-1 flex-col h-[396px] md:h-[auto] items-start justify-start p-[8px] rounded-[16px] sm:w-[100%] w-[320px]"
                thisisatitle_One="This is a title that looks pretty nice"
                thisisanicesubt_Five="This is a nice subtitle or label"
                download_Four="Download"
              />
              <CardsColumnthebandparty
                className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start mb-[25px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
                thisisanicetitl_Three="This is a nice title"
                thisisanicesubt_Seven="This is a nice subtitle or label"
              />
              <CardsColumnthebandmusicpra
                className="bg-gray_900 flex sm:flex-1 flex-col items-start justify-start mb-[49px] p-[16px] rounded-[16px] sm:w-[100%] w-[320px]"
                title_One="Title"
                subtitle_One="Subtitle"
                get_It_One="Get it"
                download_Five="Download"
              />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-col flex-row gap-[56px] items-start justify-start p-[16px] md:px-[20px] rounded-[5px] self-stretch md:w-[100%] w-[auto]">
          <List
            className="sm:flex-col flex-row gap-[56px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[34%]"
            orientation="horizontal"
          >
            <CardsRowthebandtorso
              className="bg-white_A700 flex flex-row h-[256px] md:h-[auto] items-start justify-start rounded-[16px] self-stretch md:w-[100%] w-[auto]"
              productivity="Productivity"
              language="Amet minim mollit non deserunt ullamco "
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              darrellsteward="Darrell Steward"
              readmore="Read More"
            />
            <CardsColumnthebandspeaker
              className="bg-white_A700 flex flex-col items-start justify-start rounded-[16px] sm:w-[100%] w-[320px]"
              productivity="Productivity"
              language="Amet minim mollit non deserunt ullamco "
              timeZone="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              darrellsteward="Darrell Steward"
              action="Read More"
            />
          </List>
          <CardsRowthebandtable
            className="bg-white_A700 flex flex-row h-[140px] md:h-[auto] items-start justify-start rounded-[16px] sm:w-[100%] w-[420px]"
            productivity="Productivity"
            language="Amet minim mollit non deserunt ullamco "
          />
          <List
            className="sm:flex-col flex-row gap-[56px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[34%]"
            orientation="horizontal"
          >
            <CardsRowthebandband
              className="bg-gray_900 flex flex-row h-[256px] md:h-[auto] items-start justify-start rounded-[16px] self-stretch md:w-[100%] w-[auto]"
              productivity="Productivity"
              language="Amet minim mollit non deserunt ullamco "
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              darrellsteward="Darrell Steward"
              action="Read More"
            />
            <CardsColumn
              className="bg-gray_900 flex flex-col items-start justify-start rounded-[16px] sm:w-[100%] w-[320px]"
              productivity="Productivity"
              language="Amet minim mollit non deserunt ullamco "
              timeZone="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
              darrellsteward="Darrell Steward"
              action="Read More"
            />
          </List>
          <CardsRowthebandplant
            className="bg-gray_900 flex flex-row h-[140px] md:h-[auto] items-start justify-start rounded-[16px] sm:w-[100%] w-[420px]"
            productivity_One="Productivity"
            language_One="Amet minim mollit non deserunt ullamco "
          />
        </div>
        <div className="border-[1px] border-deep_purple_A200 border-solid flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-start justify-start p-[16px] md:px-[20px] rounded-[5px] self-stretch md:w-[100%] w-[auto]">
          <List
            className="sm:flex-col flex-row md:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[48%]"
            orientation="horizontal"
          >
            <CardsColumnOne
              className="bg-white_A700 flex flex-col items-center justify-start p-[16px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
              darlenerobertso_One="Darlene Robertson"
              subtitle="(684) 555-0102"
              download="Download"
            />
            <CardsColumnthebandmicropho
              className="bg-gray_900 flex flex-col items-center justify-start p-[16px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
              darlenerobertso_One="Darlene Robertson"
              subtitle="(684) 555-0102"
              download="Download"
            />
          </List>
          <List
            className="sm:flex-col flex-row md:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[45%]"
            orientation="horizontal"
          >
            <CardsColumnthebandhotcup
              className="bg-white_A700 flex flex-col h-[204px] md:h-[auto] items-center justify-start p-[16px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
              darlenerobertso_One="Darlene Robertson"
            />
            <CardsColumnthebanddrum
              className="bg-gray_900 flex flex-col h-[204px] md:h-[auto] items-center justify-start p-[16px] rounded-[16px] self-stretch sm:w-[100%] w-[auto]"
              darlenerobertso_One="Darlene Robertson"
            />
          </List>
        </div>
        <List
          className="border-[1px] border-deep_purple_A200 border-solid sm:flex-col flex-row md:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-2 justify-start p-[16px] md:px-[20px] rounded-[5px] self-stretch sm:w-[100%] w-[auto]"
          orientation="horizontal"
        >
          <CardsModelightmode
            className="bg-white_A700 flex flex-col items-start justify-start p-[16px] rounded-[16px] sm:w-[100%] w-[240px]"
            cameronwilliams_One="Cameron Williamson"
            timeZone="Amet minim mollit non deserunt ullamco est sit aliqua dolor do"
            darlenerobertso_One="Darlene Robertson"
            subtitle="(684) 555-0102"
          />
          <CardsModedarkmode
            className="bg-gray_900 flex flex-col items-start justify-start p-[16px] rounded-[16px] sm:w-[100%] w-[240px]"
            cameronwilliams_One="Cameron Williamson"
            timeZone="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
            darlenerobertso_One="Darlene Robertson"
            subtitle="(684) 555-0102"
          />
        </List>
        <CardsBigcard
          className="bg-orange_200 flex flex-col items-center justify-center p-[16px] md:px-[20px] rounded-[16px] sm:w-[100%] w-[343px]"
          selfimprove="Self improve"
          time="20 min"
        />
        <List
          className="flex-col gap-[200px] md:gap-[40px] grid md:px-[20px] w-[6%]"
          orientation="vertical"
        >
          <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[40px] items-start justify-start p-[16px] rounded-[5px] self-stretch w-[auto]">
            <CardsProperty1small
              className="bg-white_A700 flex flex-col items-center justify-center p-[16px] rounded-[16px] sm:w-[100%] w-[150px]"
              selfimprove="Self improve"
              time="20 min"
            />
            <CardsProperty1small1
              className="bg-blue_200 flex flex-col items-center justify-center p-[16px] rounded-[16px] sm:w-[100%] w-[150px]"
              selfimprove_One="Self improve"
              time_One="20 min"
            />
          </div>
          <div className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[40px] h-[588px] md:h-[auto] items-start justify-start p-[16px] rounded-[5px] self-stretch w-[auto]">
            <CardsProperty1long
              className="h-[248px] md:h-[auto] p-[16px] relative sm:w-[100%] w-[150px]"
              selfimprove="Self improve"
              time="20 min"
              thebandsitting="images/img_thebandsitting.png"
            />
            <CardsProperty1long1
              className="bg-light_blue_50 flex flex-col items-center justify-start p-[16px] rounded-[16px] sm:w-[100%] w-[150px]"
              selfimprove_One="Self improve"
              time_One="20 min"
            />
          </div>
        </List>
      </div>
    </>
  );
};

export default CardsPage;
