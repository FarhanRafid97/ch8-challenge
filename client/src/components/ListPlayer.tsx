import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { InputProps } from './Pages';

interface ListPlayerProps {
  players: InputProps['player'][];
}

const ListPlayer: React.FC<ListPlayerProps> = ({ players }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [valSearch, setValsearch] = useState('');
  const [search, setSearch] = useState('');

  const inputPLayer = players.filter((val) => {
    if (search === '') {
      return val;
    } else if (val.username.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  return (
    <>
      <Button w="100px" colorScheme="blue" onClick={onOpen}>
        List Player
      </Button>
      <Drawer
        placement="right"
        size="sm"
        onClose={onClose}
        onCloseComplete={() => setSearch('')}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Stack spacing={3} direction="column">
              <Input
                placeholder="Search Input"
                onChange={(e) => setValsearch(e.target.value)}
                size="md"
                width="90%"
              />
              <Select placeholder="Select option">
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="experience">Experience</option>
                <option value="level">Level</option>
              </Select>
              <Button
                onClick={() => setSearch(valSearch)}
                colorScheme="telegram"
              >
                Search
              </Button>
            </Stack>

            <DrawerCloseButton
              top="18px"
              bg="red.400"
              color="white"
              _hover={{ backgroundColor: 'red.200' }}
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={6} direction="column">
              {inputPLayer.length === 0 && (
                <Flex justifyContent="center">Data tidka ada</Flex>
              )}
              {inputPLayer.map((player) => (
                <Box
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderLeft="2px solid #007AB8"
                >
                  <Heading fontSize="xl">Username :{player.username}</Heading>
                  <Text mt={2}>Email :{player.email}</Text>
                  <Text mt={2}>Experience :{player.experience}</Text>
                  <Text mt={2}>Level :{player.level}</Text>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListPlayer;
