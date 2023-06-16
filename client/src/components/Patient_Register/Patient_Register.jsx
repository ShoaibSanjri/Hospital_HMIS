import React from "react";
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { BiCheckDouble, BiDotsVerticalRounded, BiSearch } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { LuPointer } from "react-icons/lu";
import { BsPersonFillAdd } from "react-icons/bs";
const Patient_Register = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="#319795"
      padding={"2rem 0.5rem 4rem"}
      position={"relative"}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        p="5px"
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        alignItems={"center"}
      >
        <Text>Patient Registration</Text>
        <Box display="flex" justifyContent="space-between" gap="10px">
          <BiCheckDouble style={{ cursor: "pointer" }} />
          <FaSave style={{ cursor: "pointer" }} />
          <BiDotsVerticalRounded style={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Box bg="white" height={"100%"}>
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
            w="32%"
            fontSize="12px"
          >
            <Text size="sm" fontSize="12px">
              Registration Number
            </Text>
            <Input placeholder="Reg. No"></Input>
            <Box display="flex" justifyContent="space-around" gap="5px">
              <Box>
                {" "}
                <LuPointer
                  style={{
                    width: "24px",
                    height: "20px",
                    backgroundColor: "#3440eb",
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
                    backgroundColor: "#3498eb",
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
            w="23%"
            alignItems="center"
            textAlign="center"
          >
            <Text>Reg No.</Text>
            <Input w="70%" placeholder="date"></Input>
          </Box>
          <Box
            fontSize="12px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="23%"
            textAlign="center"
          >
            <Box display="flex" gap="10px">
              <Checkbox w="15px" h="15px" border="1px black solid"></Checkbox>
              <Text>New Born</Text>
            </Box>
            <Box mr="20px">
              <BsPersonFillAdd
                style={{
                  width: "24px",
                  height: "20px",
                  backgroundColor: "#3498eb",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Text p="5px">Personal Details</Text>
        <hr />
        <Box className="person_detail">
          <Box
            className="name"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Box display="flex" gap="10px">
                <Text>First Name </Text>
                <Box color="red">*</Box>
              </Box>
              <Input w="70%" placeholder="Patient Name"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Middle Name </Text>

              <Input w="70%" placeholder="Middle Name"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" gap="10px">
                <Text>Last Name </Text>
                <Box color="red">*</Box>
              </Box>
              <Input w="70%" placeholder="Last Name"></Input>
            </Box>
          </Box>
          <Box
            className="dob"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Box display="flex" gap="10px">
                <Text>D O B </Text>
                <Box color="red">*</Box>
              </Box>
              <Input w="70%" placeholder="Date of Birth" type="date"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Age </Text>

              <Input w="70%" placeholder="Age"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" gap="10px">
                <Text>Gender </Text>
                <Box color="red">*</Box>
              </Box>
              <select style={{ width: "70%" }}>
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Box>
          </Box>
          <Box
            className="language"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Text>Marital Status</Text>
              <select style={{ width: "70%" }} name="" id="">
                <option value="">Marital Status </option>
                <option value="">Married</option>
                <option value="">Not Married</option>
              </select>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Occupation </Text>
              <select style={{ width: "70%" }} name="" id="">
                <option value="">occupation </option>
                <option value="">Engineer</option>
                <option value="">Social Worker</option>
              </select>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Language</Text>
              <select style={{ width: "70%" }}>
                <option>Language</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
                <option value="other">Other</option>
              </select>
            </Box>
          </Box>
          <Box
            className="religion"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Text>Education Level</Text>
              <select style={{ width: "70%" }} name="" id="">
                <option value=""> Select </option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" gap="10px">
                <Text> Religion </Text>
                <Box color="red">*</Box>
              </Box>
              <select style={{ width: "70%" }} name="" id="">
                <option value="">Christian </option>
                <option value="">Hindu</option>
                <option value="">Muslim</option>
              </select>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" gap="10px">
                <Text> Citizen </Text>
                <Box color="red">*</Box>
              </Box>
              <select style={{ width: "70%" }}>
                <option>Select</option>
                <option value="hindi">India</option>
                <option value="english">UK</option>
                <option value="other">Other</option>
              </select>
            </Box>
          </Box>
          <Box
            className="email"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Text>Email</Text>
              <Input w="70%" placeholder="Email Id" />
            </Box>
          </Box>
        </Box>
        <Text p="5px">Home Address</Text>
        <hr />
        <Box className="Home address">
          <Box
            className="address"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Box display="flex" gap="10px">
                <Text>Address </Text>
                <Box color="red">*</Box>
              </Box>
              <Input w="70%" placeholder="Address"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>City </Text>

              <Input w="70%" placeholder="City"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Country</Text>
              <Input w="70%" placeholder="Country"></Input>
            </Box>
          </Box>
          <Box
            className="code"
            display="flex"
            justifyContent="space-between"
            p="10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Text>Code </Text>

              <Input w="70%" placeholder="Address"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" gap="10px">
                <Text>Tele Phone </Text>
                <Box color="red">*</Box>
              </Box>

              <Input w="70%" placeholder="telephone"></Input>
            </Box>
            <Box
              fontSize="12px"
              display="flex"
              gap="30px"
              w="28%"
              alignItems="center"
              textAlign="center"
            >
              <Text>Postal Address</Text>
              <Input type="checkbox"></Input>
            </Box>
          </Box>
          <Text p="5px">Payer Information</Text>
          <hr />
          <Box display="flex" justifyContent="space-between" p="10px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Box display="flex" gap="10px">
                <Text>Payer </Text>
                <Box color="red">*</Box>
              </Box>

              <select style={{ width: "70%" }} name="" id="">
                <option value="">Private Cash</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" p="10px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              w="28%"
              fontSize="12px"
            >
              <Text>Sponser </Text>

              <select style={{ width: "70%" }} name="" id="">
                <option value="">Private Cash</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Patient_Register;
