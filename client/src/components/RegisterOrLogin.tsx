import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import InputField from './InputField';
import Layout from './Layout';
import ListPlayer from './ListPlayer';

export interface InputProps {
  player: {
    id?: number;
    username: string;
    email?: string;
    password: string;
    experience?: number;
    level?: number;
  };
}

interface RegisterOrLoginProps {}
const RegisterOrLogin: React.FC<RegisterOrLoginProps> = () => {
  const toast = useToast();
  const [register, setRegister] = useState(false);
  const [players, setPlayers] = useState<InputProps['player'][]>([
    {
      id: 1,
      username: 'farhan',
      email: 'farhan@gmail.com',
      password: '1234',
      experience: 100,
      level: 1,
    },
  ]);
  const [player, setPlayer] = useState<InputProps['player']>({
    id: players.length + 1,
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
    <Layout>
      <Flex direction="column" w="100%" justifyContent="center" mb={12}>
        <Text>{register ? 'Register' : 'Login'} Player</Text>
        <ListPlayer players={players} setPlayers={setPlayers} />
      </Flex>
      <Flex direction="column" rowGap="20px">
        <InputField
          value={player.username}
          onChange={handleChange}
          name="username"
          placeholder="username"
          label="username"
        />
        {register && (
          <InputField
            value={player.email}
            onChange={handleChange}
            name="email"
            placeholder="email"
            label="email"
          />
        )}
        <InputField
          value={player.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
          label="password"
          type="password"
        />
        {register && (
          <InputField
            value={player.experience}
            onChange={handleChange}
            name="experience"
            placeholder="experience"
            label="experience"
          />
        )}
      </Flex>
      <Flex direction="column" mt={5} rowGap="15px">
        <Button
          colorScheme="telegram"
          variant="solid"
          onClick={() => {
            setPlayers([...players, player]);
            setPlayer({
              id: 0,
              username: '',
              email: '',
              password: '',
              experience: 0,
              level: 1,
            });
            toast({
              title: register ? 'Account created.' : 'loggin succes',
              description: register
                ? "We've created your account for you."
                : 'Youre now logged',
              status: 'success',
              position: 'top',
              duration: 3000,
              isClosable: true,
            });
          }}
        >
          {register ? 'Register' : 'Login'}
        </Button>{' '}
        <Button
          colorScheme="telegram"
          variant="solid"
          onClick={() => setRegister(!register)}
        >
          {register ? 'Alredy Have Account?' : 'Dont Have Account?'}
        </Button>
      </Flex>
    </Layout>
  );
};

export default RegisterOrLogin;
