import React from 'react';
import {
  ChartCard,
  Form,
  Header,
  Stat,
  TextInput,
  PhoneInput,
  NumberInput,
  EmailInput,
  PasswordInput,
  PlayerControls,
  Post,
  AppCard,
  CheckboxInput,
  FileUploadInput,
} from 'components';
import { Button, Card, Checkbox, Container, Grid, Typography } from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';
import { GitHub } from '@mui/icons-material';
import Car from './car';
import { useWatch } from 'react-hook-form';

// Use the formula
// A=P*(r(1+r)^{n})/((1+r)^{n}-1).

// Calculate the interest rate per month. The annual interest rate is 7 percent. Divide this by 12 to get the monthly interest rate. The monthly interest rate is 0.583 percent
// (7/12=.5833)

// A=15,090*(.00583(1+.00583)^{{48}})/(1+.00583)^{{48}}-1

function MonthlyPayment() {
  const values = useWatch();
  const { principal: p, term: t, rate: r } = values;
  const interestRatePerMonth = r / 12 / 100;

  // calculate monthly payment
  const it = Math.pow(1 + interestRatePerMonth, t);
  const monthlyPayment = (p * interestRatePerMonth * it) / (it - 1);

  return <Typography>monthly payment: {monthlyPayment}</Typography>;
}

export function App() {
  return (
    <Container>
      <Header
        title="Welcome to Joy+"
        subtitle="This is the header component"
        action={
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<GitHub />}
            component="a"
            href="https://github.com/sernstberger/joy-plus"
            target="_blank"
          >
            GitHub
          </Button>
        }
      />

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <AppCard
            img="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            title="Yosemite National Park App"
            description="This is the app for Yosemite National Park. It is fun to visit and learn things."
          />
        </Grid>

        <Grid xs={12} sm={4}>
          {/* <ChartCard /> */}
          <Stat value={1234.56} previousValue={1253} />
        </Grid>
        <Grid xs={12} sm={4}>
          <PlayerControls mediaLength={10} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <ChartCard title="Chart Card" value={1234.56} previousValue={1234}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={200}
            />
          </ChartCard>
        </Grid>
        {/* <Grid xs={12} sm={4}>
          <Form>
            <TextInput fieldName="textInput" label="Text" required />
            <NumberInput fieldName="numberInput" label="Number" required />
            <PhoneInput fieldName="phoneInput" label="Phone" required />
            <CheckboxInput fieldName="remember" label="Remember me" />
            <FileUploadInput />
          </Form>
        </Grid> */}
        {/* <Grid xs={12} sm={4}>
          <Card variant="outlined">
            <Form>
              <EmailInput fieldName="emailInput" label="Email" required />
              <PasswordInput
                fieldName="passwordInput"
                label="Password"
                required
              />
              <CheckboxInput
                fieldName="agree"
                label="I agree to disagree"
                required
                defaultChecked={true}
              />
            </Form>
          </Card>
        </Grid> */}

        <Grid xs={12} sm={4}>
          <Post
            imgSrc="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            imgSrcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            imgAlt="Tunnel View at Yosemite National Park"
            title="Yosemite National Park"
            content="This is the main content of my post. The post is about Yosemite National Park. It is fun to visit."
          />
        </Grid>

        <Grid xs={12} sm={8}>
          <Car />
        </Grid>

        <Grid xs={12} sm={4}>
          <Card variant="outlined">
            <Form>
              <NumberInput fieldName="term" label="Term" required />
              <NumberInput fieldName="rate" label="Interest rate" required />
              <NumberInput fieldName="principal" label="Principal" required />

              <MonthlyPayment />
            </Form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
