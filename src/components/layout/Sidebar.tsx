// Vamos a importar los elementos de chakra para este componente

import { Box, VStack, Text, Link, Image,Icon } from '@chakra-ui/react';
import LogoImage from '../../assets/Logo.svg';
import { FaLaptopCode } from 'react-icons/fa';
import BgPattern from '../../assets/Pattern.svg'


// Vamos a crear el corazón del componente SideBar

const SideBar = () => {
    return (
        <Box 
            bgColor="#2C1644" 
            w="300px" 
            minH="100vh" 
            p="45px"
            backgroundImage={`url(${BgPattern})`}
            backgroundSize="cover"
            bgSize="580px"
        >
            <VStack gap={10} alignItems="stretch" textAlign="start">
                <Box>
                <Image src={LogoImage} alt="Saygn Studio Logo" mx="auto"/>
                </Box>

                <Box>
                    <Text fontFamily="heading" fontWeight="bold" fontSize="3xl">CoderLabs</Text>
                </Box>
                    <VStack display="flex" alignItems="flex-start" gap={12} fontFamily="heading" fontWeight="bold"  fontSize="20px">
                        <Link display="flex" color="#FFFFFF"   alignItems="" _hover={{ color: 'blue.300'}}>
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text>HTML for jsx</Text>
                        </Link>
                        
                        <Link display="flex" color="#FFFFFF"   alignItems="center" _hover={{ color: 'blue.300'}}>
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text>CSS</Text>
                        </Link>
                        
                        <Link display="flex" color="#FFFFFF" alignItems="" _hover={{ color: 'blue.300'}}>
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text >JavaScript for React</Text>
                        </Link>
                    </VStack>               
           </VStack> 
           
        </Box>
    )
}


export default SideBar;