import React from 'react';
import { LinearProgress, Typography } from '@mui/joy';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';
import { FlowStepProps } from './FlowStep';
import { setMaxSteps } from './flowSlice';

interface FlowProps {
  children:
    | React.ReactElement<FlowStepProps>[]
    | React.ReactElement<FlowStepProps>;
}

export default function Flow({ children }: FlowProps) {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = React.Children.count(children);
  const value = (flow / totalSteps) * 100;

  // Set maxSteps in Redux store when Flow component is mounted
  React.useEffect(() => {
    dispatch(setMaxSteps(totalSteps));
  }, [totalSteps, dispatch]);

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
