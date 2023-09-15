import {
  FeinInput,
  TextInput,
  DateInput,
  SsnInput,
  SelectInput,
  Form,
} from 'form';
import { Divider } from '@mui/joy';
import Flow from '../Flow';
import FlowStep from '../Flow/FlowStep';

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

export default function Quote() {
  return (
    <div>
      <Flow>
        <FlowStep index nextTo="two">
          <One />
        </FlowStep>

        <FlowStep path="two" prevTo="/quote/one" nextTo="/quote/three">
          <Two />
        </FlowStep>

        <FlowStep path="three" prevTo="/quote/two" nextTo="/quote/done">
          <Three />
        </FlowStep>
      </Flow>

      <br />
      <Divider />

      <h2>All together</h2>
      <Form>
        <One />
        <Two />
        <Three />
      </Form>
    </div>
  );
}
