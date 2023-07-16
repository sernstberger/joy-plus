import { Header } from 'components';
import { Button, Card } from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';

const ChartCard = () => {
  return (
    <Card>
      <Header
        title="Chart Card"
        subtitle="This has a chart in it."
        action={
          <Button variant="solid" color="primary">
            Go
          </Button>
        }
      />

      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </Card>
  );
};

export function App() {
  return (
    <div>
      <Header
        title="Welcome to Joy+"
        subtitle="This is the header component"
        action={
          <Button variant="solid" color="primary">
            Go
          </Button>
        }
      />

      <ChartCard />
    </div>
  );
}

export default App;
