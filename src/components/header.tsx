import {Flex, Box, Input, IconButton, Spacer, Image, InputGroup, InputRightElement} from '@chakra-ui/react';
import {FaMicrophone, FaRegBell, FaUserCircle, FaBars, FaSearch} from 'react-icons/fa';
import { BiVideoPlus } from "react-icons/bi";

const Header = () => {
    return (
        <Flex as="header" p="2" bg="black" align="center">
            {/* Menu Button and Logo */}
            <Flex ml={1} align="center">
                <IconButton
                    aria-label="Menu"
                    icon={<FaBars size={20}/>}
                    bg="transparent"
                    color="white"
                    mx="2"
                    borderRadius="full"
                    _hover={{ bg: 'gray.900' }}
                />
                <Box ml={5}>
                    <Image src="/youtube_logo.png" alt="YouTube Logo" height="20px" />
                </Box>
            </Flex>

            {/* Spacer to push search bar to the center */}
            <Spacer />

            {/* Search Bar */}
            <Flex flex="1" maxW="650px" ml="10">
                <InputGroup>
                    <Input
                        placeholder="Search"
                        bg="black"
                        color="gray.700"
                        borderColor="gray.700"
                        borderWidth="1px"
                        borderRadius="full"
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{ bg: 'gray.700' }}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search"
                            icon={<FaSearch size={20}/>}
                            bg="gray.700"
                            color="white"
                            borderRadius="full"
                            _hover={{ bg: 'gray.700' }}
                        />
                    </InputRightElement>
                </InputGroup>
                <IconButton
                    aria-label="Search"
                    icon={<FaMicrophone />}
                    ml="4"
                    color="white"
                    bg="gray.800"
                    borderRadius="full"
                    _hover={{ bg: 'gray.700' }}
                />
            </Flex>

            {/* Spacer to push icons to the right */}
            <Spacer />

            {/* Icons */}
            <Flex align="center">
                <IconButton
                    aria-label="Create"
                    icon={<BiVideoPlus size={25}/>}
                    bg="transparent"
                    color="white"
                    mx="2"
                    borderRadius="full"
                    _hover={{ bg: 'gray.900' }}
                />
                <IconButton
                    aria-label="Notifications"
                    icon={<FaRegBell size={20}/>}
                    bg="transparent"
                    color="white"
                    mx="2"
                    borderRadius="full"
                    _hover={{ bg: 'gray.900' }}
                />
                <IconButton
                    aria-label="User Profile"
                    icon={<FaUserCircle size={20}/>}
                    bg="transparent"
                    color="white"
                    mx="2"
                    borderRadius="full"
                    _hover={{ bg: 'gray.900' }}
                />
            </Flex>
        </Flex>
    );
};

export default Header;