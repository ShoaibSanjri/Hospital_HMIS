import { Box, Button, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import boy from "../../assets/boy.png"
import { FcInfo } from "react-icons/fc";
import folder from "../../assets/folder.png"
import history from "../../assets/history.png"
import heart from "../../assets/heart-attack.png"
import details from "../../assets/details.png"
import prescription from "../../assets/prescription.png"
const PatientVisits = () => {
  return (
      <Box bg="#bed9f1" p="5px" w="100%" >
          <Box  display="flex" border="1px red solid"  w="100%" justifyContent="space-between"  >
              <Box>Patient Visit</Box>
              <Box display="flex" gap="15px">
                  <Box display="flex" gap="7px">
                      <Text color="#13b1f6" >Reg No.:</Text>
                      <Text>116</Text>
                  </Box>
                  <Box display="flex" gap="7px">
                      <Text color="#13b1f6">Name:</Text>
                      <Text>Mr. Good Luck</Text>
                  </Box>
                  <Box display="flex" gap="7px">
                      <Text color="#13b1f6" >Age/Gender:</Text>
                      <Text>23yr/M</Text>
                  </Box>
                  <Box display="flex" gap="7px" alignItems="center">
                      <Image w="4%" src={boy} /> 
                      <FcInfo />
                  </Box>
              </Box>
          </Box>
          <Box bg="white" p="10px"  >
              <Box  display="flex" gap="2px" alignItems="center" fontSize="13px" color="white" >
                  <Box bg="#16b1f4" display="flex"  gap = "10px" margin="auto" alignItems="center"  >
                      <Image  ml="50px" width="10%" src={folder} alt="" />
                      <Text mr="50px" >MEDICAL RECORDS</Text >
                  </Box>
                  <Box bg="#16b1f4" display="flex"  gap = "10px" margin="auto" alignItems="center"  >
                      <Image ml="90px" width="10%" src={history} alt="" />
                      <Text mr="50px" >HISTORY</Text >
                  </Box>
                  <Box bg="#16b1f4" display="flex"  gap = "10px" margin="auto" alignItems="center" >
                      <Image ml="90px" width="10%" src={heart} alt="" />
                      <Text mr="50px" >VITALS</Text >
                  </Box>
                  <Box bg="#16b1f4" display="flex"   justifyContent="space-evenly"  >
                      <Image ml="40px" width="9%" src={details} alt="" />
                      <Text mr="40px" >MEDICATION DETAILS</Text >
                  </Box>
                  <Box bg="#16b1f4" display="flex"   justifyContent="space-evenly"  >
                      <Image  width="10%" src={prescription} alt="" />
                      <Text  >PRESCRIPTION MEDICINE </Text >
                  </Box>
                  
                  
                  
              </Box>
              <Box display="flex" gap="3px" p="5px" bg="#f1f1f1" fontSize="15px" >
                  <Text color="#16b1f4" >ALLEGIES/IMMUNIZATION</Text>
                  <Button bg="#0081bc" size="xs" >VITAL SIGN</Button>
              </Box>
              <Box p= "3px">
                  <Text fontWeight="bold" >Vital Signs</Text>
              </Box>
              <hr />
              <Box>
                  <Box  display="flex" justifyContent="space-between" >
                      <Box  display="flex"  w="30%" gap="30.3%" alignItems="center" ml="10px" >
                          <Text textAlign="start" >Systolic B.P</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"  w="30%" gap="20%" alignItems="center"  >
                          <Text textAlign="start" >Diastolic B.P</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"  w="30%" gap="18.5%" alignItems="center"  >
                          <Text textAlign="start" >Temperature (oC)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      
                      
                      
                      
                  </Box>
                  <Box  display="flex" justifyContent="space-between" >
                      <Box  display="flex"   w="30%" gap="28.9%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >Weight (KG)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="18%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >DHeight (cm)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="27%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >BMI (Kg/M2)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      
                      
                      
                      
                  </Box>
                  <Box  display="flex" justifyContent="space-between" >
                      <Box  display="flex"   w="30%" gap="18.2%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >Respiratory (/min)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="12%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >Heart Rate(BPM)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="26%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >Urine Output</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      
                      
                      
                      
                  </Box>
                  <Box  display="flex" justifyContent="space-between" >
                      <Box  display="flex"   w="30%" gap="24%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >Blood Sugar(F)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="15%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >Blood Sugar(R)</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      <Box display="flex"   w="30%" gap="39.5%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >SPO2</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                      </Box>
                      
                      
                      
                      
                  </Box>
                  <Box   display="flex" justifyContent="space-between" >
                      <Box  display="flex"   w="30%" gap="40%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >AUPV</Text>
                          <Select border="1px grey solid"  w="50%" size="xs" placeholder='Select option'>
                            <option value=""></option>
                          </Select>
                      </Box>
                      <Box display="flex"   w="30%" gap="28.5%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >Trauma</Text>
                          <Select border="1px grey solid"  w="50%" size="xs" placeholder='Select option'>
                            <option value=""></option>
                          </Select>
                      </Box>
                      <Box display="flex"   w="30%" gap="35%" alignItems="center" mt="3px"  >
                          <Text textAlign="start" >Mobility</Text>
                          <Select border="1px grey solid"  w="50%" size="xs" placeholder='Select option'>
                            <option value=""></option>
                          </Select>
                      </Box>
                      
                      
                      
                      
                  </Box>
                  <Box  display="flex"   w="30%" gap="14%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >Oxygen Supplement</Text>
                          <Input border="1px gray solid" w="50%" size="xs" ></Input>
                  </Box>
                  <Box  display="flex" gap="9.3%" alignItems="center" mt="3px" ml="10px" >
                          <Text textAlign="start" >Comments</Text>
                          <Input border="1px gray solid"  size="xs" ></Input>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt="3px" ml="10px" >
                      <Box>Current Vitals</Box>
                      <Box color="#16b1f4">Normal Range</Box>
                  </Box>
              </Box>
          </Box>
    </Box>
  )
}

export default PatientVisits
