import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({ size: _, ...props }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Input {...props} placeholder={props.label} />
    </FormControl>
  );
};

export default InputField;
