// Vamos a importar los elementos de chakra para este componente

import { Box, VStack, Text, Link, Image, Icon, Accordion, Span } from '@chakra-ui/react';
import LogoImage from '../../assets/Logo.svg';
import { FaLaptopCode, FaBook, FaCode, FaExchangeAlt, FaTrash } from 'react-icons/fa';
import BgPattern from '../../assets/Pattern.svg'
import { useState } from 'react';

// Vamos a crear el corazón del componente SideBar

const SideBar = () => {
    // Estado para rastrear el elemento activo
    const [activeItem, setActiveItem] = useState<string | null>(null);

    // Función para manejar los clics en los elementos
    const handleItemClick = (itemId: string) => {
        setActiveItem(itemId === activeItem ? null : itemId);
    };

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
                        <Link 
                            display="flex" 
                            color={activeItem === 'html' ? 'blue.300' : '#FFFFFF'} 
                            alignItems="" 
                            onClick={() => handleItemClick('html')}
                            cursor="pointer"
                        >
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text>HTML for jsx</Text>
                        </Link>
                        
                        <Link 
                            display="flex" 
                            color={activeItem === 'css' ? 'blue.300' : '#FFFFFF'} 
                            alignItems="center" 
                            onClick={() => handleItemClick('css')}
                            cursor="pointer"
                        >
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text>CSS</Text>
                        </Link>
                        
                        <Link 
                            display="flex" 
                            color={activeItem === 'react' ? 'blue.300' : '#FFFFFF'} 
                            alignItems="" 
                            onClick={() => handleItemClick('react')}
                            cursor="pointer"
                        >
                            <Icon as={FaLaptopCode} mr={2} /> 
                            <Text>React JavaScript</Text>
                        </Link>
                        
                        <Accordion.Root collapsible width="100%">
                            <Accordion.Item value="requests-apis">
                                <Accordion.ItemTrigger 
                                    display="flex" 
                                    justifyContent="space-between" 
                                    px={0} 
                                    py={2} 
                                    color={activeItem === 'requests-apis' ? 'blue.300' : '#FFFFFF'} 
                                    fontWeight="bold" 
                                    bg="transparent"
                                    onClick={() => handleItemClick('requests-apis')}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Icon as={FaCode} mr={2} />
                                        <Span flex="1">Requests & APIs</Span>
                                    </Box>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody>
                                        <VStack align="flex-start" gap={4} pl={6} color="white">
                                            <Link 
                                                display="flex" 
                                                alignItems="center" 
                                                color={activeItem === 'intro' ? 'blue.300' : '#FFFFFF'}
                                                onClick={() => handleItemClick('intro')}
                                                cursor="pointer"
                                            >
                                                <Icon as={FaBook} mr={2} />
                                                <Text>Introduccion</Text>
                                            </Link>
                                            <Link 
                                                display="flex" 
                                                alignItems="center" 
                                                color={activeItem === 'get' ? '#F92D71' : '#FFFFFF'}
                                                onClick={() => handleItemClick('get')}
                                                cursor="pointer"
                                            >
                                                <Icon as={FaCode} mr={2} />
                                                <Text>GET</Text>
                                            </Link>
                                            <Link 
                                                display="flex" 
                                                alignItems="center" 
                                                color={activeItem === 'post' ? '#F92D71' : '#FFFFFF'}
                                                onClick={() => handleItemClick('post')}
                                                cursor="pointer"
                                            >
                                                <Icon as={FaCode} mr={2} />
                                                <Text>POST</Text>
                                            </Link>
                                            <Link 
                                                display="flex" 
                                                alignItems="center" 
                                                color={activeItem === 'put-patch' ? '#F92D71' : '#FFFFFF'}
                                                onClick={() => handleItemClick('put-patch')}
                                                cursor="pointer"
                                            >
                                                <Icon as={FaExchangeAlt} mr={2} />
                                                <Text>PUT/PATCH</Text>
                                            </Link>
                                            <Link 
                                                display="flex" 
                                                alignItems="center" 
                                                color={activeItem === 'delete' ? '#F92D71' : '#FFFFFF'}
                                                onClick={() => handleItemClick('delete')}
                                                cursor="pointer"
                                            >
                                                <Icon as={FaTrash} mr={2} />
                                                <Text>DELETE</Text>
                                            </Link>
                                        </VStack>
                                    </Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        </Accordion.Root>
                    </VStack>               
           </VStack>   
        </Box>
    )
}


export default SideBar;