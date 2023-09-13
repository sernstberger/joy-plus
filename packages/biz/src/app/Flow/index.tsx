import {
  FeinInput,
  // Form,
  TextInput,
  PhoneInput,
  DateInput,
  SsnInput,
  SelectInput,
  CheckboxInput,
  FileUploadInput,
  FormGroup,
  Form,
} from 'form';
import { Button, Divider, Grid, LinearProgress, Stack } from '@mui/joy';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { DevTool } from '@hookform/devtools';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './flowSlice';
import { Children } from 'react';

export interface FormProps {
  children: React.ReactNode;
}

const FlowStep = ({ children }: any) => {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  return (
    <Form>
      {children}

      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          color="neutral"
          type="submit"
          onClick={() => dispatch(decrement())}
        >
          Back
        </Button>
        <Button
          variant="solid"
          color="primary"
          type="submit"
          onClick={() => dispatch(increment())}
        >
          Submit
        </Button>
      </Stack>
    </Form>
  );
};

const One = () => {
  return (
    <>
      <h1>One</h1>
      <TextInput fieldName="businessName" label="Business name" required />
    </>
  );
};

const Two = () => {
  return (
    <>
      <h1>Two</h1>
      <SelectInput fieldName="industry" label="Industry" />
    </>
  );
};

const Three = () => {
  return (
    <>
      <h1>Three</h1>
      <FeinInput fieldName="fein" label="FEIN" />
    </>
  );
};

const formatPercentage = (value: number) => {
  const formattedValue = Number(value / 100).toLocaleString(undefined, {
    style: 'percent',
    // minimumFractionDigits: 2,
  });

  return formattedValue;
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
      <Link to="">one</Link>
      <Link to="two">two</Link>
      <Link to="three">three</Link>

      <Routes>
        <Route
          index
          element={
            <FlowStep>
              <One />
            </FlowStep>
          }
        />
        <Route
          path="two"
          element={
            <FlowStep>
              <Two />
            </FlowStep>
          }
        />
        <Route
          path="three"
          element={
            <FlowStep>
              <Three />
            </FlowStep>
          }
        />
      </Routes>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <Form>
        <One />
        <Two />
        <Three />
      </Form>
    </div>
  );
}
