import { Box } from '@chakra-ui/react';

export type VariantType = 'ragular' | 'small';
interface WrapperProps {
  variant?: VariantType;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      maxW={variant === 'ragular' ? '800px' : '600px'}
      w="100%"
      mx="auto"
      p="15px"
      paddingTop="35px"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
