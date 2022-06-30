import { Box, Button } from '@chakra-ui/react';
import { useReducer, createContext } from 'react';
import { TypeCount, ActionCount } from './StateType';

interface CountProps {}
const initialState = 0;

export function reducerCount(state: number, action: ActionCount) {
  switch (action.type) {
    case TypeCount.DECREMENT:
      return (state += 1);
    case TypeCount.INCREMENT:
      return (state -= 1);
    default:
      throw new Error();
  }
}

const Count: React.FC<CountProps> = ({}) => {
  const [state, dispatch] = useReducer(reducerCount, initialState);
  const countContext = createContext(state);
  console.log(countContext);
  return (
    <Box>
      Count: {state}
      <Button onClick={() => dispatch({ type: TypeCount.DECREMENT })}>-</Button>
      <Button onClick={() => dispatch({ type: TypeCount.INCREMENT })}>+</Button>
    </Box>
  );
};

export default Count;
