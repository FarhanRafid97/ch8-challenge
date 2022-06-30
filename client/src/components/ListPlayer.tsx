import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { InputProps } from './Pages';

interface ListPlayerProps {
  players: InputProps['player'][];
}

const ListPlayer: React.FC<ListPlayerProps> = ({ players }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w="100px" colorScheme="blue" onClick={onOpen}>
        List Player
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              {players.map((player) => (
                <ListItem>{player.email}</ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListPlayer;
