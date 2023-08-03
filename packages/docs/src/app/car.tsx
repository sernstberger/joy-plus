import { Carousel, Header } from 'components';
import { Button, Container, Grid } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';
import Card from '@mui/joy/Card';

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
