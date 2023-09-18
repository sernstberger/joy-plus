import React from 'react';
import { LinearProgress, Typography } from '@mui/joy';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';
import { FlowStepProps } from '../FlowStep/FlowStep';

import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FlowProps {
  children:
    | React.ReactElement<FlowStepProps>[]
    | React.ReactElement<FlowStepProps>;

  setMaxSteps: any;
  updateStep: any;
}

export function Flow({ children, setMaxSteps, updateStep }: FlowProps) {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = React.Children.count(children);
  const value = (flow / totalSteps) * 100;

  // Set maxSteps in Redux store when Flow component is mounted
  React.useEffect(() => {
    dispatch(setMaxSteps(totalSteps));
  }, [totalSteps, dispatch]);

  const paths = React.Children.map(
    children,
    (child: React.ReactElement<FlowStepProps>) => child.props.path,
  );

  const location = useLocation();
  const currentStep = paths.indexOf(location.pathname.split('/quote/')[1]) + 1; // +1 because array index starts from 0

  React.useEffect(() => {
    if (currentStep !== flow) {
      dispatch(updateStep(currentStep)); // Update the step in the redux store
    }
  }, [currentStep, flow, dispatch]);

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

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <LinearProgress determinate value={value} />
      <Typography>
        step {flow} of {totalSteps} / {formatPercentage(value)}
      </Typography>
      <Routes>
        {/* <Route index element={ React.Children.toArray(children)[0]} /> */}

        {/* children should always be FlowSteps */}
        {renderedRoutes}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <DevTool control={methods.control} /> {/* set up the dev tool */}
    </FormProvider>
  );
}

export default Flow;
