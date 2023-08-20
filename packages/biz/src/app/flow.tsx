import {
  FeinInput,
  Form,
  TextInput,
  PhoneInput,
  DateInput,
  SsnInput,
  NavList,
} from 'components';
import { Container, Divider, Grid, Stack, Typography } from '@mui/joy';

export default function Flow() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Grid xs={12}>
        <NavList
          orientation="horizontal"
          links={[
            {
              title: 'Home',
            },
            {
              title: 'Quote',
              children: [
                {
                  title: 'Foo',
                },
                {
                  title: 'Resources',
                },
                {
                  title: 'Reports',
                },
              ],
            },
            {
              title: 'Resources',
            },
            {
              title: 'Reports',
            },
          ]}
        />
        <div>Account selector</div>
        <div>User select menu</div>
        <Form>
          <TextInput fieldName="businessName" label="Business name" required />
          <DateInput fieldName="effectiveDate" label="Effective date" />
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
        </Form>
      </Grid>

      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
