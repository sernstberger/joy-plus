import { Header, Logo } from 'components';
import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Sheet,
  Slider,
  Stack,
  Typography,
} from '@mui/joy';

interface CreditCardProps {
  name: string;
  number: string;
  expiry: string;
  // cvc: string;
}

const CreditCard = ({ name, number, expiry }: CreditCardProps) => {
  {
    /* Credit cards are 3.375 inches wide by 2.125 inches high.  */
  }

  const width = 3.375;
  const height = 2.125;

  return (
    <AspectRatio
      ratio="3.375/2.125"
      // component={Card}
      variant="solid"
      color="primary"
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

          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography level="body-lg">{number}</Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{name}</Typography>
                <Typography>{expiry}</Typography>
              </Stack>
            </div>
            <div>card logo</div>
          </Stack>
        </Stack>
      </div>
    </AspectRatio>
  );
};

const SliderInput = ({ label }: any) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <Slider defaultValue={3} max={10} />
    </div>
  );
};

export default function Home() {
  return (
    <Container maxWidth="xs">
      {/* <Header
        title="something goes here"
        subtitle="foooobar"
        action={<Button>hi</Button>}
      /> */}

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        // spacing={2}
      >
        <Grid xs={12}>
          <Card>
            <Typography>Your cards</Typography>
            <CreditCard
              name="Steven Ernstberger"
              number="1111222233334444"
              expiry="06/23"
            />
            {/* <CreditCard
              name="Sandra Franzberger"
              number="1111222233334445"
              expiry="06/23"
            /> */}
            <Stack direction="row" spacing={1}>
              <Button variant="outlined">View card details</Button>
              <Button variant="outlined">View pin</Button>
            </Stack>

            <List>
              <ListItem>
                <div>logo</div>

                <Typography>yuuuup</Typography>
                <Typography>expires asldkfsa</Typography>
              </ListItem>
              <ListItem>beans</ListItem>
            </List>

            <Typography>Limit tracker</Typography>
            <div>5000</div>

            <SliderInput label="Thing goes here" defaultValue={3} max={10} />
            <SliderInput label="Nope goes here" defaultValue={3} max={10} />
            <Divider />
            <CardActions>
              <Button variant="plain" color="neutral" sx={{ mr: 'auto' }}>
                Close
              </Button>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined">Lock limits</Button>
                <Button>Add new card</Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* <Grid
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
      </Grid> */}
      {/* <Grid xs={12}>
        <Divider />
      </Grid> */}
    </Container>
  );
}
