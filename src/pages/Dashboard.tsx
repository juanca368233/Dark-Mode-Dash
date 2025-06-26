import Layout from "../components/layout/Layout";
import { Box, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
<Layout>
      {/* Este es el contenido principal del dashboard que se mostrará junto al sidebar y header */}
      <Box>
        <Heading as="h2" size="xl" mb={4}>Contenido del Dashboard</Heading>
        <Text>Aquí puedes ver el Sidebar a la izquierda y el Header arriba.</Text>
      </Box>
    </Layout>
  );
};

export default Dashboard;