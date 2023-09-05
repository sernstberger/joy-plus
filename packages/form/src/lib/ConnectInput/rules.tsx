import { AnySchema } from 'yup';
import { validate } from './validate';

export interface RulesProps {
  // max?: {
  //   value: number;
  //   message: string;
  // };
  // min?: {
  //   value: number;
  //   message: string;
  // };
  // minLength?: {
  //   value: number;
  //   message: string;
  // };
  // maxLength?: {
  //   value: number;
  //   message: string;
  // };
  label: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  customValidation?: AnySchema;
  disabled?: boolean;
}

const rules = ({
  label,
  required = false,
  customValidation,
  disabled = false,
  minLength,
  maxLength,
  min,
  max,
}: any) => {
  return {
    required: {
      value: !disabled && required,
      message: `${label} is required.`,
    },
    // valueAsNumber: true,
    min: {
      value: min,
      message: `${label} has minimum of ${min}.`,
    },
    max: {
      value: max,
      message: `${label} has maximum of ${max}.`,
    },

    minLength: {
      value: minLength,
      message: `${label} has a minimum of ${minLength} characters.`,
    },
    maxLength: {
      value: maxLength,
      message: `${label} has a maximum of ${maxLength} characters.`,
    },

    validate: {
      custom: (value: AnySchema) => validate(value, customValidation),
    },
  };
};

export default rules;
