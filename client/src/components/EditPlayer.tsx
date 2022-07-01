import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { InputProps } from './RegisterOrLogin';
interface EditPlayerProps {
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
  playerForEdit: InputProps['player'][];
  players: InputProps['player'][];
  setPlayers: React.Dispatch<React.SetStateAction<InputProps['player'][]>>;
}

const EditPlayer: React.FC<EditPlayerProps> = ({
  setId,
  playerForEdit,
  players,
  setPlayers,
}) => {
  const [player, setPlayer] = useState<InputProps['player']>({
    id: 0,
    username: '',
    email: '',
    password: '',
    experience: 0,
    level: 1,
  });
  const updatedData = players.map((p) => (p.id === player.id ? player : p));

  useEffect(() => {
    setPlayer(playerForEdit[0]);
  }, [playerForEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Flex direction="column" rowGap="20px">
        <Input
          value={player.username}
          onChange={handleChange}
          name="username"
          placeholder="username"
          size="sm"
        />

        <Input
          value={player.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
          size="sm"
        />

        <Input
          value={player.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
          size="sm"
        />

        <Input
          value={player.experience}
          onChange={handleChange}
          name="experience"
          placeholder="experience"
          size="sm"
        />
        <Box>
          <Button
            colorScheme="telegram"
            mr={4}
            onClick={() => {
              setPlayers(updatedData);
              setId(0);
            }}
          >
            Submit
          </Button>
          <Button colorScheme="red" onClick={() => setId(0)}>
            Cancel
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default EditPlayer;
