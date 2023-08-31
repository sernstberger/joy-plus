import {
  FeinInput,
  Form,
  TextInput,
  PhoneInput,
  DateInput,
  SsnInput,
  SelectInput,
  CheckboxInput,
  FileUploadInput,
} from 'components';
import { Divider, Grid, Stack, Typography } from '@mui/joy';

export default function Flow() {
  return (
    <div>
      <Grid xs={12}>
        <br />
        <Divider />
        <br />
        <Form>
          <FormSection
            primary="Personal information"
            secondary="We just need it. Give it to us."
          >
            <FileUploadInput />
            <TextInput
              fieldName="businessName"
              label="Business name"
              required
            />
            <DateInput fieldName="effectiveDate" label="Effective date" />
            <SelectInput fieldName="industry" label="Industry" />
            {/* address should be a google autocomplete */}
            <TextInput fieldName="mailingAddress" label="Mailing address" />
            <FeinInput fieldName="fein" label="FEIN" />
          </FormSection>

          <Divider />

          <FormSection primary="Owner info">
            {/* need to be able to add multiple owners (use useFieldArray) */}

            {/* <Grid container spacing={2}>
                  <Grid xs={6}>
                    <TextInput fieldName="firstName" label="First name" />
                  </Grid>
                  <Grid xs={6}>
                    <TextInput fieldName="lastName" label="Last name" />
                  </Grid>
                </Grid> */}
            <Stack
              direction="row"
              spacing={2}
              // justifyContent="space-between"
            >
              <TextInput fieldName="firstName" label="First name" />
              <TextInput fieldName="lastName" label="Last name" />
            </Stack>
            <SsnInput fieldName="ssn" label="Social security number" />
            <DateInput
              fieldName="birthday"
              label="Birthday"
              // slotProps={{
              //   input: {
              //     min: '2018-06-07T00:00',
              //     max: '2018-06-14T00:00',
              //   },
              // }}
            />
            <PhoneInput fieldName="phone" label="Phone number" />
            <TextInput
              fieldName="ownershipPercentage"
              label="Ownership percentage"
              helperText="Some helper text goes here."
            />
            <CheckboxInput fieldName="agree" label="Do you agree to terms?" />
          </FormSection>
        </Form>
      </Grid>
    </div>
  );
}

export const FormSection = ({ children, primary, secondary }: any) => {
  return (
    <Grid container>
      <Grid xs={12} sm={4}>
        <Typography fontWeight="bold">{primary}</Typography>
        {secondary && <Typography level="body-sm">{secondary}</Typography>}
      </Grid>
      <Grid xs={12} sm={8}>
        <Stack
          spacing={2}
          // alignItems="flex-start"
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};
