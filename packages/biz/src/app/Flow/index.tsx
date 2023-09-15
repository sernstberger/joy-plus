import { LinearProgress, Typography } from '@mui/joy';
import { Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPercentage } from 'utils';

export interface FormProps {
  children: React.ReactNode;
}

export default function Flow({ children }: any) {
  const flow = useSelector((state: any) => state.flow.value);
  const dispatch = useDispatch();

  const totalSteps = 10;
  const value = (flow / totalSteps) * 100;
  return (
    <div>
      <LinearProgress determinate value={value} />
      <Typography>
        step {flow} of {totalSteps} / {formatPercentage(value)}
      </Typography>

      <br />

      <Routes>
        {/* children should always be FlowSteps */}
        {children}
      </Routes>
    </div>
  );
}
