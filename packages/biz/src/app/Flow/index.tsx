import { LinearProgress, Typography } from '@mui/joy';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';
import FlowStep, { FlowStepProps } from './FlowStep';
import React from 'react';

export interface FormProps {
  children: React.ReactNode;
}

function isFlowStep(child: any): child is React.ReactElement<FlowStepProps> {
  return React.isValidElement(child) && child.type === FlowStep;
}

export default function Flow({ children }: any) {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = 10;
  const value = (flow / totalSteps) * 100;

  const renderedRoutes = React.Children.map(children, (child) => {
    if (isFlowStep(child)) {
      return (
        <Route
          path={child.props.path}
          index={child.props.index}
          element={React.cloneElement(child)}
        />
      );
    }
    return child; // Return the child as is if it's not a FlowStep
  });

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
