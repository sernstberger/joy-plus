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
} from 'form';
import { Button, Divider, Grid, LinearProgress, Stack } from '@mui/joy';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { DevTool } from '@hookform/devtools';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './flowSlice';

export interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  // const methods = useForm({
  //   defaultValues: {
  //     // hello: "hi"
  //     test: 'hi',
  //   },
  // });
  const methods = useForm();
  // const onSubmit = (data: any) => console.log('***', JSON.stringify(data));
  // const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>{children}</Stack>
      </form>
      <DevTool control={methods.control} /> {/* set up the dev tool */}
    </FormProvider>
  );
}

const One = () => {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>One</h1>
      <TextInput fieldName="businessName" label="Business name" required />

      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{flow}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const Two = () => {
  return (
    <div>
      <h1>Two</h1>
      <SelectInput fieldName="industry" label="Industry" />
    </div>
  );
};

const Three = () => {
  return (
    <div>
      <h1>Three</h1>
      <FeinInput fieldName="fein" label="FEIN" />
    </div>
  );
};

export default function Flow() {
  return (
    <div>
      <br />
      <br />
      <LinearProgress determinate value={25} />
      <br />
      <Link to="">one</Link>
      <Link to="two">two</Link>
      <Link to="three">three</Link>
      <Form>
        <Routes>
          <Route index element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <Button variant="solid" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
