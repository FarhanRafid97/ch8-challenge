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
  const [idEdit, setIdEdit] = useState<number | undefined>(0);
  const [valSearch, setValsearch] = useState('');
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState<string | number>('');

  const notAvailableSearch = () => {
    if (searchBy === 'username') {
      return `Username  "${search}" Not Available`;
    }
    if (searchBy === 'email') {
      return `Email  "${search}" Not Available`;
    }
    if (searchBy === 'experience') {
      return `We Dont Have User With Experience  "${search}"`;
    }
    if (searchBy === 'level') {
      return `We Dont Have User With level  "${search}"`;
    }
    return 'select your option';
  };

  const inputPLayer = players.filter((val) => {
    if (
      searchBy === 'username' &&
      val.username.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    }
    if (
      searchBy === 'email' &&
      val.email.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    }

    if (searchBy === 'experience' && val.experience.toString() === search) {
      return val;
    }
    if (searchBy === 'level' && val.level.toString() === search) {
      return val;
    }

    if (search === '') {
      return val;
    }
    return null;
  });
  console.log(searchBy === '');

  const playerForEdit = players.filter((player) => player.id === idEdit);

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
          setIdEdit(0);
        }}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Stack spacing={3} direction="column">
              <Input
                value={valSearch}
                placeholder="Search Input"
                onChange={(e) => setValsearch(e.target.value)}
                size="md"
                width="90%"
              />
              <Select
                placeholder="Select option"
                onChange={(e) => setSearchBy(e.target.value)}
              >
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
              <Button
                onClick={() => {
                  setValsearch('');
                  setSearch('');
                }}
                colorScheme="red"
              >
                reset
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
                <Flex justifyContent="center">{notAvailableSearch()}</Flex>
              )}
              {inputPLayer.map((player) =>
                player.id === idEdit ? (
                  <Box
                    key={player.id}
                    p={5}
                    shadow="md"
                    alignItems="center"
                    justifyContent="space-between"
                    borderWidth="1px"
                    borderLeft="2px solid #007AB8"
                  >
                    <EditPlayer
                      setId={setIdEdit}
                      players={players}
                      playerForEdit={playerForEdit}
                      setPlayers={setPlayers}
                    />
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
                          Username :{player.username}
                        </Heading>

                        <Text mt={2}>Email :{player.email}</Text>
                        <Text mt={2}>Experience :{player.experience}</Text>
                        <Text mt={2}>Level :{player.level}</Text>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={() => setIdEdit(player.id)}
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
