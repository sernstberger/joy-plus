import { useFormContext } from 'react-hook-form';

export interface ConnectInputProps {
  children: any;
}

export function ConnectInput({ children }: ConnectInputProps) {
  const methods = useFormContext();

  console.log('methods', methods.formState.errors);

  return children({ ...methods });
}

export default ConnectInput;
