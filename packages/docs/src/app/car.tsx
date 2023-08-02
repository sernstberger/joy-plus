import { Header } from 'components';
import { Button, Container, Grid } from '@mui/joy';
import { FavoriteBorder } from '@mui/icons-material';

export function Car() {
  return (
    <Container>
      <Header
        title="Welcome to Joy+"
        subtitle="This is the header component"
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
          car
        </Grid>
        <Grid xs={12} sm={4}>
          sidebar
        </Grid>
      </Grid>
    </Container>
  );
}

export default Car;
