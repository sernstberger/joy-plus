import { Children } from 'react';
import {
  FeinInput,
  TextInput,
  PhoneInput,
  DateInput,
  SsnInput,
  SelectInput,
  CheckboxInput,
  FileUploadInput,
  FormGroup,
  Form,
  FormBase,
} from 'form';
import { Button, Divider, LinearProgress, Stack } from '@mui/joy';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  To,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './flowSlice';
import { formatPercentage } from 'utils';

export interface FormProps {
  children: React.ReactNode;
}

interface FlowStepProps {
  children: React.ReactNode;
  prevTo?: To;
  nextTo: To;
}

const FlowStep = ({ children, prevTo, nextTo }: FlowStepProps) => {
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

const One = () => {
  return (
    <>
      <TextInput fieldName="businessName" label="Business name" required />
      <SsnInput fieldName="ssn" label="Social security number" />
    </>
  );
};

const Two = () => {
  return (
    <>
      <DateInput fieldName="effectiveDate" label="Effective date" />
      <SelectInput fieldName="industry" label="Industry" />
    </>
  );
};

const Three = () => {
  return (
    <>
      <FeinInput fieldName="fein" label="FEIN" />
      <TextInput fieldName="mailingAddress" label="Mailing address" />
    </>
  );
};

export default function Flow() {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = 10;
  const value = (flow / totalSteps) * 100;
  return (
    <div>
      <br />
      <br />
      <LinearProgress determinate value={value} />
      <div>
        step {flow} of {totalSteps}
      </div>
      <div>value: {formatPercentage(value)}</div>
      <br />
      {/* <Link to="">one</Link>
      <Link to="two">two</Link>
      <Link to="three">three</Link> */}

      <Routes>
        <Route
          index
          element={
            <FlowStep nextTo="two">
              <One />
            </FlowStep>
          }
        />
        <Route
          path="two"
          element={
            <FlowStep prevTo="/products/one" nextTo="/products/three">
              <Two />
            </FlowStep>
          }
        />
        <Route
          path="three"
          element={
            <FlowStep prevTo="/products/two" nextTo="/products/done">
              <Three />
            </FlowStep>
          }
        />
      </Routes>

      <br />
      <Divider />
      <br />

      <h2>All together</h2>
      <Form>
        <One />
        <Two />
        <Three />
      </Form>
    </div>
  );
}
