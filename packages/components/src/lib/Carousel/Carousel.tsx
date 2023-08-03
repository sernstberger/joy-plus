import { useRef } from 'react';
import { Button, Stack } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export function Carousel({ images }: any) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: any) => {
    console.log('scroll', scrollOffset);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          overflow: 'auto',
          // display: 'flex',
          // gap: 1,
          scrollSnapType: 'x mandatory',

          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
        ref={carouselRef}
      >
        <AspectRatio
          minHeight={120}
          // maxHeight={600}
          maxHeight={'100%'}
          // objectFit="contain"
        >
          {images.map((src: any, index: any) => {
            const srcSet = `${src}&dpr=2 2x`;
            return (
              <img
                src={src}
                srcSet={srcSet}
                loading="lazy"
                alt={`Car ${index + 1}`}
              />
            );
          })}
        </AspectRatio>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={() => scroll(-800)}>Prev</Button>
        <Button onClick={() => scroll(800)}>Next</Button>
      </Stack>
    </div>
  );
}

export default Carousel;
