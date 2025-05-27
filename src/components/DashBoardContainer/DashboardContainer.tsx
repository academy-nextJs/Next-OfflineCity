'use client'

import React from "react";
import DashboardBox from "../common/DashboardBox/DashboardBox";
import DashboardInformation from "../common/DashboardInformation/DashboardInformation";
import DashboardProfile from "../common/DashboardProfile/DashboardProfile";
import DashboardTable from "../common/DashboardTable/DashboardTable";

const DashboardContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[19px] pt-[19px]">
        <DashboardBox /> <DashboardBox /> <DashboardBox /> <DashboardBox />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  pt-[19px] gap-[19px]" >
        <DashboardInformation />   <DashboardProfile />
      </div>
      <div className="pt-3">
         <DashboardTable />
      </div>
    </div>
  );
};

export default DashboardContainer;
