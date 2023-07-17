import { useFormContext } from 'react-hook-form';

export interface ConnectInputProps {
  children: any;
}

export function ConnectInput({ children }: ConnectInputProps) {
  const methods = useFormContext();

  return children({ ...methods });
}

export default ConnectInput;
