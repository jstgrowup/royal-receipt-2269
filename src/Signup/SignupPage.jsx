import { Box, Center, Checkbox, Flex, Heading, Input, Select, SimpleGrid, Spacer, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import {



    InputGroup,

    InputRightElement,

    Button,




} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navi = useNavigate()
    const [formData, updateFormdata] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
        Lname: "",
        Fname: "",
        dob: "",
        zipcode: undefined,
        termsOfUse: false,
        privacyPolicy: false,
        selcity: ""

    });
    const { username, termsOfUse, privacyPolicy, email, password1, password2, Lname, Fname, dob, zipcode, selcity } = formData
    const handleChange = (e) => {
        let { value, name, type, checked } = e.target
        value = type === "checkbox" ? checked : value
        updateFormdata((prev) => ({ ...prev, [name]: value }))

    }
    const hola = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem("userdetails", JSON.stringify(formData))
            navi("/");
        }, 1500);
    }

    function check() {

        // isError = username === '' ? alert("please enter all your credentials") : 
        if (username === "" || email === "" || password1 === "" || password2 === "" || Lname === "" || Fname === "" || dob === "" || zipcode === "" || selcity === "" || termsOfUse === false || privacyPolicy === false) {
            alert("Please enter all the credentials")
        }
        else if (password1 !== password2) {
            alert("Passowrd doesn't match")
        }
        else {

            hola()
        }
        updateFormdata({
            username: "",
            email: "",
            password1: "",
            password2: "",
            Lname: "",
            Fname: "",
            dob: "",
            zipcode: "",
            selcity: "",
            privacyPolicy: false,
            termsOfUse: false
        })
    }
    console.log(formData);
    return (
        <>
            <Box minW={"100%"} minH={"900px"} backgroundImage="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmericaCityPageHeader.jpg">
                <Center>
                    <Box minH={"96px"} w="750px" backgroundImage="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmerica2020-02-768x96.png">
                    </Box>

                </Center>

                <Center minW={"100%"} minH="500px" mt={"14"} >
                    <Flex gap="3" direction={"column"} align="center" p="3.2rem" bg="#FFFFFF" borderRadius={"2xl"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} minH={"750px"}   >
                        <Text fontFamily={"Montserrat"} fontSize={"3xl"}>Welcome to SparkAmerica</Text>
                        <Text fontFamily={"Montserrat"} fontSize={"xl"}>We need to get to know you and you'll be on your way in now time</Text>
                        <SimpleGrid columns={[1, 1, 2, 2]} spacing="5" minW={"100%"} >
                            <Flex gap="4" direction={"column"} align="center">
                                <Input onChange={handleChange} value={email} name="email" size={"lg"} type={"text"} placeholder="Enter email" ></Input>


                                <InputGroup>
                                    <Input onChange={handleChange} value={password1} name="password1" placeholder='Enter Password' size={"lg"} type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            size={"lg"}
                                            variant={'icono'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon bgSize={"2px"} /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>

                                <Input onChange={handleChange} size={"lg"} value={Fname} name="Fname" type={"text"} placeholder="First Name" ></Input>
                                <Input onChange={handleChange} size={"lg"} type={"date"} value={dob} name="dob" placeholder="Date of Birth(mm/dd/yyyy)"></Input>

                                <Input onChange={handleChange} size={"lg"} type={"number"} placeholder="Zip Code" value={zipcode} name="zipcode" ></Input>

                                <Text maxW={"sm"} noOfLines={[20, 15, 10, 5]} >
                                    Create a username that will be displayed
                                    publicly on leaderBoards.This can be
                                    fun and must be unique , so try adding some
                                    numbers to the end if your first
                                    choice is already taken.
                                </Text>


                                <Input onChange={handleChange} size={"lg"} type={"text"} value={username} name="username" placeholder="Username"></Input>

                                <Text maxW={"sm"} noOfLines={[20, 15, 10, 2]}>
                                    Select the city closest to you to participate
                                    in city challenges(optional)
                                </Text>
                                <Select onChange={handleChange} value={selcity} name="selcity">
                                    <option value="">[Select City]</option>
                                    <option value={"Arizona"}>Arizona</option >
                                    <option value={"Arkansas"}>Arkansas</option >
                                    <option value={"California"}> California  </option >
                                    <option value={"Colorado"}> Colorado </option >
                                    <option value={"Connecticut"}> Connecticut  </option >
                                    <option value={"Delaware"}> Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value={"Gregoria"} >Gregoria </option>
                                    <option value={"Hawaii"}>Hawaii</option>
                                    <option value={"Idaho"} >Idaho </option>
                                    <option value={"Illinois"} >Illinois </option>
                                    <option value={"Indiana"} >Indiana </option>
                                    <option value={"Iowa"} >Iowa </option>
                                    <option value={"Kansas"} >Kansas</option>
                                    <option value={"Kentucky"} >Kentucky</option>
                                    <option value={"Maine"} >Maine </option>
                                    <option value={"Maryland"} >Maryland </option>
                                    <option value={"Massachusetts"}>Massachusetts</option>
                                    <option value={"Michigan"} >Michigan </option>
                                    <option value={"Minnesota"} >Minnesota </option>
                                    <option value={"Utah"} >Utah</option>
                                    <option value={"Oregon"}>Oregon </option>
                                    <option value={"Ohio"}>Ohio  </option>
                                    <option value={"New York "}> New York </option>
                                    <option value={"Nevada"}>Nevada </option>
                                    <option value={"Washington"} >Washington</option>
                                    <option value={"Virginia"} >Virginia</option>
                                    <option value={"Texas"} >Texas</option>
                                    <option value={"West Virginia"} >West Virginia</option>
                                    <option value={"Vermont"} >Vermont </option>
                                    <option value={"Wyoming"} >Wyoming</option>
                                    <option value={"South Dakota"} >South Dakota</option>
                                    <option value={"Oklahoma"} >Oklahoma</option>
                                    <option value={"New Jersey"} >New Jersey</option>
                                    <option value={"New Mexico"} >New Mexico</option>
                                    <option value={"New Hemisphere"} >New Hemisphere</option>
                                    <option value={"Mississippi"} >Mississippi</option>
                                    <option value={"Montana"} >Montana</option>

                                </Select>
                                <label htmlFor="">
                                    <Checkbox onChange={handleChange} value={termsOfUse} name="termsOfUse" type={"checkbox"} colorScheme='red' />
                                    I have read and agree to PeoplOne's Terms of Use.
                                </label>
                                <label htmlFor="">
                                    <Checkbox onChange={handleChange} value={privacyPolicy} name="privacyPolicy" type={"checkbox"} size='md' colorScheme='red' />
                                    I have read and agree to PeopleOne's Privacy Policy

                                </label>

                            </Flex>
                            <Flex gap="4" direction={"column"} align="center">
                                <InputGroup>
                                    <Input onChange={handleChange} placeholder='Enter Password again' value={password2} name="password2" size={"lg"} type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            size={"lg"}
                                            variant={'icono'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon bgSize={"2px"} /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Input onChange={handleChange} size={"lg"} placeholder='Last Name' type={"text"} value={Lname} name="Lname"></Input>
                            </Flex>
                        </SimpleGrid>
                        <Flex align={"center"} minW="100%" p={"1"} >
                            <Heading fontSize={"md"} color="#006DA8" >GO BACK</Heading>
                            <Spacer />
                            <Button onClick={check} variant={"ghost"}>
                                {isLoading ? <Spinner color='white.500' /> : "CREATE ACCOUNT"}
                                {/* CONTINUE <ChevronRightIcon /> */}


                            </Button>
                        </Flex>
                    </Flex>
                </Center>


            </Box>

        </>
    )
}
