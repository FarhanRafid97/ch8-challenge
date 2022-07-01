import { Avatar, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Flex
      bg={bgColor}
      padding="15px 45px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>Logo</Text>
      <Flex alignItems="center">
        <Avatar
          name="Dan Abrahmov"
          size="sm"
          src="https://bit.ly/dan-abramov"
        />
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
