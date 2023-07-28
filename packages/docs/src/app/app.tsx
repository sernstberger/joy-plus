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
} from 'components';
import { Button, Card, Checkbox, Container, Grid } from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';

export function App() {
  return (
    <Container>
      <Header
        title="Welcome to Joy+"
        subtitle="This is the header component"
        action={
          <Button variant="solid" color="primary">
            Go
          </Button>
        }
      />

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <Stat value={1234.56} previousValue={1233} />
        </Grid>
        <Grid xs={12} sm={4}>
          {/* <ChartCard /> */}
          <Stat value={1234.56} previousValue={1234.56} />
        </Grid>
        <Grid xs={12} sm={4}>
          {/* <ChartCard /> */}
          <Stat value={1234.56} previousValue={1253} />
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
          <ChartCard />
        </Grid>*/}
        <Grid xs={12} sm={4}>
          <Form>
            <TextInput fieldName="textInput" label="Text" required />
            <NumberInput fieldName="numberInput" label="Number" required />
            <PhoneInput fieldName="phoneInput" label="Phone" required />
          </Form>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card variant="outlined">
            <Form>
              <EmailInput fieldName="emailInput" label="Email" required />
              <PasswordInput
                fieldName="passwordInput"
                label="Password"
                required
              />
              <Checkbox label="Remember me" required />
            </Form>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <PlayerControls mediaLength={10} />
        </Grid>
        <Grid xs={12} sm={4}>
          <Post
            imgSrc="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            imgSrcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            imgAlt="Tunnel View at Yosemite National Park"
            title="Yosemite National Park"
            content="This is the main content of my post. The post is about Yosemite National Park. It is fun to visit."
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <AppCard
            img="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            title="Yosemite National Park App"
            description="This is the app for Yosemite National Park. It is fun to visit and learn things."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
