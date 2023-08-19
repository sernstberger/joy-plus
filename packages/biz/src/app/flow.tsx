import { FeinInput, Form, TextInput, PhoneInput, SsnInput } from 'components';
import { Container, Divider, Grid, Stack, Typography } from '@mui/joy';

export default function Flow() {
  return (
    <Container>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <div>Account selector</div>
        <div>User select menu</div>
        <Form>
          <TextInput fieldName="businessName" label="Business name" required />
          <TextInput fieldName="effectiveDate" label="Effective date" />
          {/* industry should be select */}
          <TextInput fieldName="industry" label="Industry" />
          {/* address should be a google autocomplete */}
          <TextInput fieldName="mailingAddress" label="Mailing address" />
          <FeinInput fieldName="fein" label="FEIN" />
          <Divider />

          {/* need to be able to add multiple owners (use useFieldArray) */}
          <Typography>Owner info</Typography>
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
          <TextInput fieldName="birthday" label="Birthday" />
          <PhoneInput fieldName="phone" label="Phone number" />
          <TextInput
            fieldName="ownershipPercentage"
            label="Ownership percentage"
            helperText="Some helper text goes here."
          />
        </Form>
      </Grid>
    </Container>
  );
}
