import { Box, Button, Checkbox, Input, Text } from "@chakra-ui/react";
import React from "react";
import { BiCheckDouble, BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";
import { LuPointer } from "react-icons/lu";

const OPB = () => {
  return (
    <Box border="1px red solid" w="100%" h="100vh" bg="#bed9f1" fontSize="14px">
      <Box display="flex" justifyContent="space-between" p="10px">
        <Text>Out-Patient Billing</Text>
        <Box display="flex" justifyContent="space-between" gap="10px">
          <FaSave style={{ cursor: "pointer" }} />
          <GiBroom style={{ cursor: "pointer" }} />
          <BiDotsVerticalRounded style={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Box bg="white">
        <Box
          className="register_number"
          display="flex"
          justifyContent="space-between"
          p="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
            w="25%"
            fontSize="12px"
          >
            <select style={{ width: "35%" }} name="" id="">
              <option value="">Regd. No.</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <Input w="35%" placeholder="Reg. No"></Input>
            <Box display="flex" justifyContent="space-around" gap="5px">
              <Box>
                {" "}
                <LuPointer
                  style={{
                    width: "24px",
                    height: "20px",
                    backgroundColor: "#045091",
                    color: "white",
                    cursor: "pointer",
                  }}
                />{" "}
              </Box>
              <Box>
                {" "}
                <BiSearch
                  style={{
                    width: "24px",
                    height: "20px",
                    backgroundColor: "#045091",
                    color: "white",
                    cursor: "pointer",
                  }}
                />{" "}
              </Box>
              {/* <Box border="1px black solid"><  /></Box> */}
            </Box>
          </Box>
          <Box
            fontSize="12px"
            display="flex"
            justifyContent="space-between"
            w="33%"
            alignItems="center"
            textAlign="center"
          >
            <Text>Visit No.</Text>
            <select style={{ width: "60%" }} name="" id="">
              <option value="">General OPD</option>
            </select>
          </Box>
          <Button
            color="white"
            border="none"
            size="sm"
            cursor="pointer"
            bg="#045091"
          >
            Pending Orders
          </Button>
              </Box>
              <Box bg='#eff5fd' className="name" m="10px" >
                  <Box display="flex" justifyContent="space-between"  >
                  <Box  >
                      Mr. Good Luck
                  </Box>
                  <Box className="payer" display="flex" gap="5px" mr="10%" w="31.3%">
                          <Text >Payer: Private Cash , </Text>
                          <Text >Sponsor: Private Cash , </Text>
                          <Text >Network: </Text>
                  </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" >
                      <Box display="flex " gap="10px" >
                          <Text>Male ,</Text>
                          <Text>23 Years ,</Text>
                          <Text fontWeight="bold" >Mobile No: 8094941896 ,</Text>
                          <Text color="">Outstanding: 0.0</Text>
                      </Box>
                      <Box display="flex" w="33.3%" justifyContent="space-between"  mr="8%">
                          <Text>Referral: </Text>
                          <Input  w="60%" placeholder="Referral" ></Input>
                      </Box>
                  </Box>
              </Box>
              <Box className="activity navbar" display="flex" justifyContent="space-between" pt="10px"  textAlign="center" alignItems="center " bg="#bed9f1" m="10px"  >
                  <Box display="flex" w="94%" gap="7%" >
                      <Box display="flex" justifyContent="space-between" w="28%">
                          <Text>Activity</Text>
                          <select style={{width:"60%"}} name="" id="">
                              <option value="">Discount</option>
                          </select>
                      </Box>
                      <Box display="flex" w="28%" justifyContent="space-between">
                      <Text>Amount Type</Text>
                          <select style={{width:"60%"}} name="" id="">
                              <option value="">Percentage</option>
                              <option value="">Amount</option>
                          </select>
                      </Box>
                      <Box display="flex" w="28%" justifyContent="space-between">
                          <Text>Value</Text>
                          <Input placeholder="value" ></Input>
                      </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" gap="5px">
                  <FaSave style={{
                    width: "24px",
                    height: "20px",
                    backgroundColor: "#045091",
                    color: "white",
                    cursor: "pointer",
                  }} />
          <GiBroom style={{
                    width: "24px",
                    height: "20px",
                    backgroundColor: "#045091",
                    color: "white",
                    cursor: "pointer",
                  }} />
                  </Box>
              </Box>
      </Box>
    </Box>
  );
};

export default OPB;
