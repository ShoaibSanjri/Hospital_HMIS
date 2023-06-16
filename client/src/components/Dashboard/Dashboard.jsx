import { Box, Text, calc } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { ImDroplet } from "react-icons/im";
import {
  FaFileInvoiceDollar,
  FaStethoscope,
  FaBed,
  FaMicroscope,
  FaFlask,
  FaAmbulance,
  FaNetworkWired,
} from "react-icons/fa";

import DashboardItems from "./DashboardItems/DashboardItems";
// import { FaBedPulse, FaDroplet, } from "react-icons/fa6";

function Dashboard() {
  const dashboard_content = [
    // {
    //   id: "DItm1",
    //   Icon: RxDashboard,
    //   itemName: "Dashboard",
    // },
    {
      id: "DItm2",
      Icon: MdDateRange,
      itemName: "Appointment",
    },
    {
      id: "DItm3",
      Icon: FaFileInvoiceDollar,
      itemName: "Billing",
    },
    {
      id: "DItm4",
      Icon: FaStethoscope,
      itemName: "OPD - Out Patient",
    },
    {
      id: "DItm5",
      Icon: FaBed,
      itemName: "IPD - In Patient",
    },
    {
      id: "DItm6",
      Icon: GiMedicines,
      itemName: "Pharmacy",
    },
    {
      id: "DItm7",
      Icon: FaFlask,
      itemName: "Pathology",
    },
    {
      id: "DItm8",
      Icon: FaMicroscope,
      itemName: "Radiology",
    },
    {
      id: "DItm9",
      Icon: ImDroplet,
      itemName: "Blood Bank",
    },
    {
      id: "DItm10",
      Icon: FaAmbulance,
      itemName: "Ambulance",
    },
    {
      id: "DItm11",
      Icon: FaNetworkWired,
      itemName: "Human Resources",
    },
  ];

  return (
    <Box
      backgroundColor={"blue.200"}
      width={"100%"}
      minHeight={"100vh"}
      padding={"2.5rem 0.5rem 4rem"}
      position={"relative"}
    >
      <Text
        position={"absolute"}
        fontSize={"1.25rem"}
        fontWeight={"400"}
        height={"2.5rem"}
        display="flex"
        alignItems="center"
        padding={"0  0 0 8px"}
        top="0"
        left="0"
      >
        Dashboard
      </Text>

      <Box
        // margin={"2rem 0.25rem 4rem"}
        padding={"1rem"}
        backgroundColor={"#eee"}
        minHeight={"calc(100vh - 6.5rem)"}
        inset={"6rem"}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={"0.5rem"}
          maxHeight={"100%"}
        >
          {dashboard_content.map((item) => {
            return (
              <DashboardItems
                key={item.id}
                id={item.id}
                dItemName={item.itemName}
                Icon={item.Icon}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
