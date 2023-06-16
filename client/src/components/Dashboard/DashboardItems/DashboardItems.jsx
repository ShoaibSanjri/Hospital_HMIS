import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./DashboardItems.module.css";

function DashboardItems({ Icon, dItemName, id }) {
  function handleClickItem(e) {
    //
    console.log(dItemName);
  }

  return (
    <Box
      onClick={handleClickItem}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      id={id}
      width={"150px"}
      height={"150px"}
      cursor={"pointer"}
      className={styles.dItemCont}
    >
      <Box
        fontSize={"5xl"}
        backgroundColor={"#fff"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"80px"}
        height={"80px"}
        marginBottom={"8px"}
      >
        <Icon className={styles.icon} />
      </Box>
      <Text fontSize={"1.125rem"}>{dItemName}</Text>
    </Box>
  );
}

export default DashboardItems;
