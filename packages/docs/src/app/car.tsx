import React, { useRef } from 'react';
import { Header } from 'components';
import { Button, Container, Grid } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';

export function CarImage({ src, alt }: any) {
  const srcSet = `${src}&dpr=2 2x`;

  return (
    <AspectRatio ratio="4/3" sx={{ minWidth: '100%' }}>
      <img src={src} srcSet={srcSet} loading="lazy" alt={alt} />
    </AspectRatio>
  );
}

const carImages = [
  'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80',
  'https://images.unsplash.com/photo-1632245872256-49c78a46c400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
  'https://images.unsplash.com/photo-1632245866516-d9ca09099a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3303&q=80',
];

export function Car() {
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
          <CarouselRatio />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card variant="solid">sidebar</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Car;

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

export function CarouselRatio() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: any) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <Button onClick={() => scroll(-200)}>Prev</Button>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          py: 1,
          overflow: 'auto',
          width: 200,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
        ref={carouselRef}
      >
        {/* {data.map((item) => (
          <Card
            orientation="horizontal"
            size="sm"
            key={item.title}
            variant="outlined"
          >
            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
              <img
                src={`${item.src}?h=120&fit=crop&auto=format`}
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
            </AspectRatio>
            <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
              <Typography level="title-md">{item.title}</Typography>
              <Typography level="body-sm">{item.description}</Typography>
            </Box>
          </Card>
        ))} */}

        {carImages.map((src, index) => (
          <CarImage key={index} src={src} alt={`Car ${index + 1}`} />
        ))}
      </Box>
      <Button onClick={() => scroll(200)}>Next</Button>
    </div>
  );
}
