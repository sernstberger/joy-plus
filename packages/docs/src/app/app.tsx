import { ChartCard, Header, Stat } from 'components';
import { Button, Card, Container, Grid } from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

export const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

export const DeepNest = () => (
  <ConnectForm>
    {({ register }: any) => <input {...register('deepNestedInput')} />}
  </ConnectForm>
);

export const Foo = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <DeepNest />
      </form>
    </FormProvider>
  );
};

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
          <Foo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
