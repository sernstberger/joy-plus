import React from 'react';
import { Button, Stack } from '@mui/joy';
import { useNavigate, To } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './flowSlice';
import { useForm, useFormContext } from 'react-hook-form';

export interface FlowStepProps {
  children: React.ReactNode;
  path?: string;
  index?: boolean;
  prevTo?: To;
  nextTo: To;
  submitText?: string;
}

export const FlowStep = ({
  children,
  path,
  index,
  prevTo,
  nextTo,
  submitText = 'Next',
}: FlowStepProps) => {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const methods = useForm();
  // const onSubmit = (data: any) => console.log('***', JSON.stringify(data));
  // const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onSubmit = (data: any) => console.log(data);

  // const {
  //   formState: { isValid },
  // } = useFormContext();

  const navigate = useNavigate();
  const handleOnClick = (to: To) => {
    if (methods.formState.isValid) {
      navigate(to);
    }
    // Optionally: else { show an error or some feedback }
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      {children}
      <Stack direction="row" justifyContent="space-between">
        {prevTo && (
          <Button
            variant="outlined"
            color="neutral"
            type="submit"
            onClick={() => {
              handleOnClick(prevTo);
            }}
          >
            Back
          </Button>
        )}
        <Button
          variant="solid"
          color="primary"
          type="submit"
          onClick={() => {
            handleOnClick(nextTo);
          }}
        >
          {submitText}
        </Button>
      </Stack>
    </form>
  );
};

export default FlowStep;
