import React from 'react';
import { Header, HeaderProps, Stat, StatProps } from '../..';
import { Card } from '@mui/joy';
import { LineChart } from '@mui/x-charts/LineChart';

export interface ChartCardProps extends HeaderProps, StatProps {
  children?: React.ReactNode;
}

export function ChartCard({
  title,
  subtitle = undefined,
  action = undefined,
  value,
  previousValue = undefined,
  children = undefined,
}: ChartCardProps) {
  return (
    <Card variant="outlined">
      <Header title={title} subtitle={subtitle} action={action} />

      <Stat value={value} previousValue={previousValue} />

      {children}
      {/* <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={300}
      /> */}
    </Card>
  );
}

export default ChartCard;
