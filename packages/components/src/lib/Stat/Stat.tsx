import { Chip, Stack, Typography } from '@mui/joy';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export interface StatProps {
  value: number;
  previousValue?: number;
}

export const Stat = ({ value, previousValue = undefined }: StatProps) => {
  const difference = previousValue ? value - previousValue : value;
  const differenceIsZero = difference === 0;
  const differenceIsPositive = difference > 0;

  const chipColor = differenceIsZero
    ? 'neutral'
    : differenceIsPositive
    ? 'success'
    : 'danger';

  const chipIcon = differenceIsZero ? undefined : differenceIsPositive ? (
    <ArrowUpwardIcon />
  ) : (
    <ArrowDownwardIcon />
  );
  const differenceRounded = Math.abs(difference).toFixed(2);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography level="h1">{value}</Typography>
      {previousValue && !differenceIsZero && (
        <Chip startDecorator={chipIcon} color={chipColor}>
          {differenceRounded}
        </Chip>
      )}
    </Stack>
  );
};

export default Stat;
