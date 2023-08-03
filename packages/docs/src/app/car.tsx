import React, { useRef } from 'react';
import { Header } from 'components';
import { Button, Container, Grid, Stack } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';

export function CarImage({ src, alt }: any) {
  const srcSet = `${src}&dpr=2 2x`;

  return (
    // <AspectRatio ratio="4/3" minHeight={120} maxHeight={200}>
    <img src={src} srcSet={srcSet} loading="lazy" alt={alt} />
    // </AspectRatio>
  );
}

const carImages = [
  // 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1632245872256-49c78a46c400?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1632245866516-d9ca09099a2e?auto=format&fit=crop&w=800',
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
          <Carousel />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card variant="solid">sidebar</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Car;

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: any) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      {/* <Box
        sx={{
          display: 'flex',
          gap: 1,
          py: 1,
          scrollSnapType: 'x mandatory',
          width: '100%',
          overflow: 'auto',
          p: 1,

          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
        ref={carouselRef}
      >
        {carImages.map((src, index) => (
          <CarImage key={index} src={src} alt={`Car ${index + 1}`} />
        ))}
      </Box> */}

      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <AspectRatio
          minHeight={120}
          maxHeight={600}
          // objectFit="contain"
        >
          <img
            src="https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&w=800&dpr=2 2x"
            alt=""
          />
          {/* {carImages.map((src, index) => (
            <CarImage key={index} src={src} alt={`Car ${index + 1}`} />
          ))} */}
        </AspectRatio>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => scroll(-200)}>Prev</Button>
        <Button onClick={() => scroll(200)}>Next</Button>
      </Stack>
    </div>
  );
}

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';

// export function Carousel() {
//   return (
//     <Box sx={{ width: '100%', overflow: 'auto', p: 1 }}>
//       <AspectRatio minHeight={120} maxHeight={200}>
//         <img
//           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
//           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
//           alt=""
//         />
//       </AspectRatio>
//     </Box>
//   );
// }

// export default Carousel;
