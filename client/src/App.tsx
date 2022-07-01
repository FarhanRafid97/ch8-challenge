import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import RegisterOrLogin from './components/RegisterOrLogin';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <RegisterOrLogin />
      </Box>
    </ChakraProvider>
  );
};
