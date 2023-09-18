import {
  FeinInput,
  TextInput,
  DateInput,
  SsnInput,
  SelectInput,
  Form,
} from 'form';
import { Divider } from '@mui/joy';
import { Flow, FlowStep } from 'form';
import { setMaxSteps, updateStep } from '../Flow/flowSlice';

export interface FormProps {
  children: React.ReactNode;
}

export const One = () => {
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

export default function Quote() {
  return (
    <div>
      <Flow {...{ setMaxSteps, updateStep }}>
        {/* <FlowStep index nextTo="two"> */}
        <FlowStep path="one" nextTo="/quote/two">
          <One />
        </FlowStep>

        <FlowStep path="two" prevTo="/quote/one" nextTo="/quote/three">
          <Two />
        </FlowStep>

        <FlowStep
          path="three"
          prevTo="/quote/two"
          nextTo="/quote/done"
          submitText="Submit"
        >
          <Three />
        </FlowStep>
      </Flow>

      {/* <br />
      <Divider />

      <h2>All together</h2>
      <Form>
        <One />
        <Two />
        <Three />
      </Form> */}
    </div>
  );
}
