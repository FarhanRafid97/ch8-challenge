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
  IconButton,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { InputProps } from './RegisterOrLogin';
import EditPlayer from './EditPlayer';

interface ListPlayerProps {
  players: InputProps['player'][];
  setPlayers: React.Dispatch<React.SetStateAction<InputProps['player'][]>>;
}

const ListPlayer: React.FC<ListPlayerProps> = ({ players, setPlayers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState<number | undefined>(0);
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
        onCloseComplete={() => {
          setSearch('');
          setId(0);
        }}
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
              {inputPLayer.map((player) =>
                player.id === id ? (
                  <Box
                    p={5}
                    shadow="md"
                    alignItems="center"
                    justifyContent="space-between"
                    borderWidth="1px"
                    borderLeft="2px solid #007AB8"
                  >
                    <EditPlayer setId={setId} />
                  </Box>
                ) : (
                  <>
                    <Flex
                      p={5}
                      shadow="md"
                      alignItems="center"
                      justifyContent="space-between"
                      borderWidth="1px"
                      borderLeft="2px solid #007AB8"
                    >
                      <Box>
                        <Heading fontSize="xl">
                          Username :{player.username} id {player.id}
                        </Heading>
                        <Text mt={2}>Email :{player.email}</Text>
                        <Text mt={2}>Experience :{player.experience}</Text>
                        <Text mt={2}>Level :{player.level}</Text>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={() => setId(player.id)}
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<EditIcon />}
                        />
                      </Box>
                    </Flex>
                  </>
                )
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListPlayer;
