import { Header } from 'components';
import { AspectRatio, Button, Card, Container, Grid } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';

export function Car() {
  const imgSrc =
    'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80';
  const imgSrcSet = `${imgSrc}&dpr=2 2x`;
  const imgAlt = 'Car';

  const imgSrc2 =
    'https://images.unsplash.com/photo-1632245872256-49c78a46c400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80';
  const imgSrcSet2 = `${imgSrc2}&dpr=2 2x`;
  const imgAlt2 = 'Car';

  const imgSrc3 =
    'https://images.unsplash.com/photo-1632245866516-d9ca09099a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3303&q=80';
  const imgSrcSet3 = `${imgSrc3}&dpr=2 2x`;
  const imgAlt3 = 'Car';

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
          <AspectRatio ratio="4/3">
            <img src={imgSrc} srcSet={imgSrcSet} loading="lazy" alt={imgAlt} />
          </AspectRatio>
          <AspectRatio ratio="4/3">
            <img
              src={imgSrc2}
              srcSet={imgSrcSet2}
              loading="lazy"
              alt={imgAlt2}
            />
          </AspectRatio>
          <AspectRatio ratio="4/3">
            <img
              src={imgSrc3}
              srcSet={imgSrcSet3}
              loading="lazy"
              alt={imgAlt3}
            />
          </AspectRatio>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card variant="solid">sidebar</Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Car;
