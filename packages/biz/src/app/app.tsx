import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { Sidebar, Nav, Header, Form, TextInput } from 'components';
import { Button, Card, Container, Divider, Grid, Typography } from '@mui/joy';
// import MyMessages from './components/MyMessages';

export default function JoyMessagesTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Nav />
        <Sidebar />
        <Box component="main" className="MainContent" flex={1}>
          {/* <MyMessages /> */}
          <Container>
            <Header
              title="something goes here"
              subtitle="foooobar"
              action={<Button>hi</Button>}
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={2}
            >
              <Grid xs={4}>
                <Card>
                  ald asdflkja dflajdlf jasldjf lasjflajfla jflkasjkldfj alsdjf
                  lksajf klasjfaljfkla djflasjd fklsajf lsajfkfj
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card>aldkfj</Card>
              </Grid>
              <Grid xs={4}>
                <Card>aldkfj</Card>
              </Grid>
              <Grid xs={4}>
                <Card>aldkfj</Card>
              </Grid>
              <Grid xs={4}>
                <Card>aldkfj</Card>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Divider />
            </Grid>
            <Grid xs={12}>
              <Form>
                <TextInput
                  fieldName="businessName"
                  label="Business name"
                  required
                />
                <TextInput fieldName="effectiveDate" label="Effective date" />
                {/* industry should be select */}
                <TextInput fieldName="industry" label="Industry" />
                {/* address should be a google autocomplete */}
                <TextInput fieldName="mailingAddress" label="Mailing address" />
                {/* fein should be a fein field */}
                <TextInput fieldName="fein" label="FEIN" />
                <Divider />
                <Typography>Owner info</Typography>
                <TextInput fieldName="firstName" label="First name" />
                <TextInput fieldName="lastName" label="Last name" />
                <TextInput fieldName="ssn" label="Social security number" />
                <TextInput fieldName="birthday" label="Birthday" />
              </Form>
            </Grid>
          </Container>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
