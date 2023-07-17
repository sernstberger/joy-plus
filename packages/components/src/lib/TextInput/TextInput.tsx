import { ChartCard, ConnectInput, Form, Header, Stat } from 'components';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from '@mui/joy';

export interface TextInputProps {
  fieldName: string;
}

export function TextInput({ fieldName }: TextInputProps) {
  return (
    <ConnectInput>
      {({ register }: any) => (
        <FormControl {...register(fieldName)}>
          <FormLabel>Label</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
      )}
    </ConnectInput>
  );
}

export default TextInput;
