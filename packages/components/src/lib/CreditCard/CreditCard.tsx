import React from 'react';
import {
  AspectRatio,
  AspectRatioProps,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { Logo } from '../components';
import { Mastercard } from './icons/Mastercard';
import { Visa } from './icons/Visa';

export interface CreditCardProps extends AspectRatioProps {
  name: string;
  number: string;
  expirationDate: string;
  // cvc: string;
  height?: number;
  width?: number;
  issuer?: 'Visa' | 'Mastercard';
}

export const CreditCard = ({
  name,
  number,
  expirationDate,
  width = 3.375,
  height = 2.125,
  color = 'primary',
  issuer = 'Visa',
}: CreditCardProps) => {
  const cardType = issuer === 'Visa' ? <Visa /> : <Mastercard />;

  return (
    <Sheet
      // ratio={`${width}/${height}`}
      // component={Sheet}
      variant="solid"
      color={color}
      // flex
      // maxHeight={300}
      invertedColors
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
              <Typography
                level="body-lg"
                letterSpacing={2.5}
                noWrap
                fontWeight="bold"
              >
                {number.replace(/\d{4}(?=.)/g, '$& ')}
              </Typography>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography
                  textTransform="uppercase"
                  level="body-sm"
                  fontWeight="bold"
                >
                  {name}
                </Typography>
                <Typography level="body-sm" fontWeight="bold">
                  {expirationDate}
                </Typography>
              </Stack>
            </div>

            {cardType}
          </Stack>
        </Stack>
      </div>
    </Sheet>
  );
};

export default CreditCard;

export * from './icons/Visa';
export * from './icons/Mastercard';
