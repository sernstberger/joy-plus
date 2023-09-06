import React from 'react';
import { AspectRatio, AspectRatioProps, Stack, Typography } from '@mui/joy';
import { Logo } from '../components';

const Foo = ({ height = 40, width = 170 }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.8601 28.138H63.8121V24.538H56.1081V10.978H51.8601V28.138Z"
        fill="#000000"
      />
    </svg>
  );
};

export interface CreditCardProps extends AspectRatioProps {
  name: string;
  number: string;
  expirationDate: string;
  // cvc: string;
  height?: number;
  width?: number;
}

export const CreditCard = ({
  name,
  number,
  expirationDate,
  width = 3.375,
  height = 2.125,
  color = 'primary',
}: CreditCardProps) => {
  return (
    <AspectRatio
      ratio={`${width}/${height}`}
      // component={Card}
      variant="solid"
      color={color}
      // flex
      // maxHeight={300}
    >
      <div>
        <Stack
          justifyContent="space-between"
          flex={1}
          alignItems="flex-start"
          sx={{ height: '100%', padding: 2 }}
        >
          <div>
            <Logo />
          </div>

          <Stack direction="row" justifyContent="space-between" width="100%">
            <div>
              <Typography level="body-lg" letterSpacing={2.5}>
                {number.replace(/\d{4}(?=.)/g, '$& ')}
              </Typography>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography textTransform="uppercase" level="body-xs">
                  {name}
                </Typography>
                <Typography level="body-xs">{expirationDate}</Typography>
              </Stack>
            </div>

            {/* card logo */}
            <Foo width={50} />
          </Stack>
        </Stack>
      </div>
    </AspectRatio>
  );
};

export default CreditCard;
