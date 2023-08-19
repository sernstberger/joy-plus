import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { Sidebar, Nav, Header } from 'components';
import { Button, Card, Container, Grid } from '@mui/joy';
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
          </Container>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
