import React, { useState } from "react";
import styles from "./Sidebar.module.css";
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
import SidebarItems from "./SidebarItems/SidebarItems";
// import { FaBedPulse, FaDroplet, } from "react-icons/fa6";

function Sidebar() {
  const [selected, setSelected] = useState("sidebarItm1");

  const sidebar_content = [
    {
      id: "sidebarItm1",
      Icon: RxDashboard,
      itemName: "Dashboard",
    },
    {
      id: "sidebarItm2",
      Icon: MdDateRange,
      itemName: "Appointment",
    },
    {
      id: "sidebarItm3",
      Icon: FaFileInvoiceDollar,
      itemName: "Billing",
    },
    {
      id: "sidebarItm4",
      Icon: FaStethoscope,
      itemName: "OPD - Out Patient",
    },
    {
      id: "sidebarItm5",
      Icon: FaBed,
      itemName: "IPD - In Patient",
    },
    {
      id: "sidebarItm6",
      Icon: GiMedicines,
      itemName: "Pharmacy",
    },
    {
      id: "sidebarItm7",
      Icon: FaFlask,
      itemName: "Pathology",
    },
    {
      id: "sidebarItm8",
      Icon: FaMicroscope,
      itemName: "Radiology",
    },
    {
      id: "sidebarItm9",
      Icon: ImDroplet,
      itemName: "Blood Bank",
    },
    {
      id: "sidebarItm10",
      Icon: FaAmbulance,
      itemName: "Ambulance",
    },
    {
      id: "sidebarItm11",
      Icon: FaNetworkWired,
      itemName: "Human Resources",
    },
  ];

  return (
    <div className={styles.sidebar_cont}>
      {sidebar_content.map((item) => {
        return (
          <SidebarItems
            Icon={item.Icon}
            key={item.id}
            id={item.id}
            selectedItem={selected}
            updateSelected={setSelected}
            itemName={item.itemName}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
