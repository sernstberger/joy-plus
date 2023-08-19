import { Header } from 'components';
import { Button, Card, Container, Divider, Grid } from '@mui/joy';

export default function Home() {
  return (
    <Container>
      <Header
        title="something goes here"
        subtitle="foooobar"
        action={<Button>hi</Button>}
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Grid xs={4}>
          <Card>
            ald asdflkja dflajdlf jasldjf lasjflajfla jflkasjkldfj alsdjf lksajf
            klasjfaljfkla djflasjd fklsajf lsajfkfj
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card>aldkfj</Card>
        </Grid>
        <Grid xs={4}>
          <Card>aldkfj</Card>
        </Grid>
        <Grid xs={4}>
          <Card>aldkfj</Card>
        </Grid>
        <Grid xs={4}>
          <Card>aldkfj</Card>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
    </Container>
  );
}
