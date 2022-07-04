import { Avatar, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const textColor = useColorModeValue('white', 'black');
  const bgColor = useColorModeValue('#0088CC', '#A3D4EC');
  return (
    <Flex
      backgroundColor={bgColor}
      padding="15px 45px"
      justifyContent="space-between"
      alignItems="center"
      color={textColor}
    >
      <Flex w="600px" m="auto" justifyContent="space-between">
        <Text fontFamily="serif">F</Text>
        <Flex alignItems="center">
          <Avatar
            name="Dan Abrahmov"
            size="sm"
            src="https://bit.ly/dan-abramov"
          />
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
