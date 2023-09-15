import { FormBase } from 'form';
import { Button, Stack } from '@mui/joy';
import { useNavigate, To } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './flowSlice';

export interface FlowStepProps {
  children: React.ReactNode;
  path?: string;
  index?: boolean;
  prevTo?: To;
  nextTo: To;
}

const FlowStep = ({ children, path, index, prevTo, nextTo }: FlowStepProps) => {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleOnClick = (to: To) => navigate(to);

  return (
    <FormBase>
      {children}
      <Stack direction="row" justifyContent="space-between">
        {prevTo && (
          <Button
            variant="outlined"
            color="neutral"
            type="submit"
            onClick={() => {
              handleOnClick(prevTo);
              dispatch(decrement());
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
            dispatch(increment());
          }}
        >
          Submit
        </Button>
      </Stack>
    </FormBase>
  );
};

export default FlowStep;
