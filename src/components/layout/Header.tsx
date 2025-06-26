import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box as="header" w="full" bg="white" boxShadow="md">
      <Container maxW="container.xl" px={4} py={3}>
        <Heading as="h1" fontSize="xl" fontWeight="bold" color="gray.800">
          Dashboard
        </Heading>
      </Container>
    </Box>
  );
};

export default Header;
