import { Box, Button, Avatar, Flex } from '@chakra-ui/react';
import { reducerCount } from './Count';
import { useReducer, useContext } from 'react';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      bg="gray.300"
      padding="15px 45px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>Logo</Box>
      <Box>
        <Avatar
          name="Dan Abrahmov"
          size="sm"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
