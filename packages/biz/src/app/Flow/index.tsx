import { LinearProgress, Typography } from '@mui/joy';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';
import FlowStep, { FlowStepProps } from './FlowStep';
import React from 'react';

interface FlowProps {
  children:
    | React.ReactElement<FlowStepProps>[]
    | React.ReactElement<FlowStepProps>;
}

export default function Flow({ children }: FlowProps) {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = 10;
  const value = (flow / totalSteps) * 100;

  const renderedRoutes = React.Children.map(
    children,
    (child: React.ReactElement<FlowStepProps>) => (
      <Route
        path={child.props.path}
        index={child.props.index}
        element={React.cloneElement(child)}
      />
    ),
  );

  return (
    <div>
      <LinearProgress determinate value={value} />
      <Typography>
        step {flow} of {totalSteps} / {formatPercentage(value)}
      </Typography>

      <br />

      <Routes>
        {/* children should always be FlowSteps */}
        {renderedRoutes}
      </Routes>
    </div>
  );
}
