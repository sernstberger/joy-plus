import React from 'react';
import { Header } from 'components';
import { Button, Card, Container, Grid } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';

import { AspectRatio } from '@mui/joy';

export function CarImage({ src, alt }: any) {
  const srcSet = `${src}&dpr=2 2x`;

  return (
    <AspectRatio ratio="4/3">
      <img src={src} srcSet={srcSet} loading="lazy" alt={alt} />
    </AspectRatio>
  );
}

export function Car() {
  const carImages = [
    'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80',
    'https://images.unsplash.com/photo-1632245872256-49c78a46c400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    'https://images.unsplash.com/photo-1632245866516-d9ca09099a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3303&q=80',
  ];

  return (
    <Container>
      <Header
        title="2021 Porsche 718 Spyder"
        subtitle="$100,999"
        action={
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<FavoriteBorder />}
          >
            Save
          </Button>
        }
      />

      <Grid container spacing={2}>
        <Grid xs={12} sm={8}>
          {carImages.map((src, index) => (
            <CarImage key={index} src={src} alt={`Car ${index + 1}`} />
          ))}
        </Grid>
        <Grid xs={12} sm={4}>
          <Card variant="solid">sidebar</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Car;
