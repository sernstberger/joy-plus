import { ChartCard, Form, Header, Stat, TextInput } from 'components';
import { Button, Container, Grid } from '@mui/joy';
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
            <TextInput
              fieldName="deepNestedInput"
              label="Deep nested"
              helperText="This is helper text."
              required
            />
            <TextInput fieldName="deepNestedInput2" label="Deep nested 2" />
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
