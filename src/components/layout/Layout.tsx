import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1" bg="white" _dark={{ bg: 'gray.900' }}>
        <Box as="main" flex="1">
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
