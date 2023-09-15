import {
  FeinInput,
  TextInput,
  DateInput,
  SsnInput,
  SelectInput,
  Form,
} from 'form';
import { Divider, LinearProgress, Typography } from '@mui/joy';
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';
import FlowStep from './FlowStep';

export interface FormProps {
  children: React.ReactNode;
}

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
      <Typography>
        step {flow} of {totalSteps} / {formatPercentage(value)}
      </Typography>

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
