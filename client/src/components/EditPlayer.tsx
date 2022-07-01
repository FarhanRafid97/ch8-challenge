import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { InputProps } from './RegisterOrLogin';
interface EditPlayerProps {
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const EditPlayer: React.FC<EditPlayerProps> = ({ setId }) => {
  const [player, setPlayer] = useState<InputProps['player']>({
    username: '',
    email: '',
    password: '',
    experience: 0,
    level: 1,
  });

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
          <Button colorScheme="telegram" mr={4}>
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
