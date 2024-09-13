// src/components/sidebar.tsx
import { Flex, IconButton } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
    return (
        <Flex
            direction="column"
            p="4"
            bg="black"
            width="80px"
            gap={3}
        >
            <IconButton
                aria-label="Home"
                icon={
                    <Flex direction="column" align="center">
                        <MdHomeFilled size={25} />
                        <span style={{ fontSize: '10px', marginTop: '4px' }}>Home</span>
                    </Flex>
                }
                bg="transparent"
                color="white"
                size="lg"
                mb="4"
                _hover={{ bg: 'gray.900' }}
            />
            <IconButton
                aria-label="Shorts"
                icon={
                    <Flex direction="column" align="center">
                        <SiYoutubeshorts size={20}/>
                        <span style={{ fontSize: '10px', marginTop: '4px' }}>Shorts</span>
                    </Flex>
                }
                bg="transparent"
                color="white"
                size="lg"
                mb="4"
                _hover={{ bg: 'gray.900' }}
            />
            <IconButton
                aria-label="Subscriptions"
                icon={
                    <Flex direction="column" align="center">
                        <MdOutlineSubscriptions size={25}/>
                        <span style={{ fontSize: '10px', marginTop: '4px' }}>Subscriptions</span>
                    </Flex>
                }
                bg="transparent"
                color="white"
                size="lg"
                mb="4"
                _hover={{ bg: 'gray.900' }}
            />
            <IconButton
                aria-label="You"
                icon={
                    <Flex direction="column" align="center">
                        <FaUser size={20}/>
                        <span style={{ fontSize: '10px', marginTop: '4px' }}>You</span>
                    </Flex>
                }
                bg="transparent"
                color="white"
                size="lg"
                mb="4"
                _hover={{ bg: 'gray.900' }}
            />
        </Flex>
    );
};

export default Sidebar;