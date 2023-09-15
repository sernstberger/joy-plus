import {
  Button,
  Card,
  CardActions,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  ListItemProps,
  Slider,
  Stack,
  Typography,
} from '@mui/joy';
import { useState } from 'react';
import { ListItemButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CreditCard, Header } from 'components';
import { Visa } from 'components';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SliderInput = ({ label, disabled = false }: any) => {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{label}</Typography>
        <Typography level="body-lg" fontWeight="bold">
          5000
        </Typography>
      </Stack>
      <Slider defaultValue={3} max={10} disabled={disabled} />
    </div>
  );
};

export interface CreditCardListItemProps {
  selected?: boolean;
}

const CreditCardListItem = ({
  selected = false,
  ...props
}: CreditCardListItemProps) => {
  return (
    <ListItem
      {...props}
      endAction={
        <IconButton aria-label="More" size="sm">
          <MoreVertIcon />
        </IconButton>
      }
    >
      <ListItemButton selected={selected}>
        <ListItemDecorator>
          <Visa />
        </ListItemDecorator>
        <ListItemContent>
          <Typography>yuuuup</Typography>
          <Typography level="body-sm" noWrap>
            expires asldkfsa
          </Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};

export default function Home() {
  const [lockLimits, setLockLimits] = useState(false);
  return (
    <Container maxWidth="md">
      <Header
        title="hello"
        subtitle="Things can go here"
        action={<Button>cool</Button>}
      />

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Grid xs={12} md={6}>
          <Card>
            <Typography level="h3">Your cards</Typography>
            <CreditCard
              name="Steven Ernstberger"
              number="1111222233334444"
              expirationDate="06/23"
            />

            <Stack direction="row" spacing={1}>
              <Button variant="outlined">View card details</Button>
              <Button variant="outlined">View pin</Button>
            </Stack>

            <List>
              <CreditCardListItem selected />
              <CreditCardListItem />
              <CreditCardListItem />

              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <AddIcon />
                  </ListItemDecorator>
                  <Typography>Add new card</Typography>
                </ListItemButton>
              </ListItem>
            </List>

            <Typography level="h3">Limit tracker</Typography>

            <SliderInput
              label="Thing goes here"
              defaultValue={3}
              max={10}
              disabled={lockLimits}
            />
            <SliderInput
              label="Nope goes here"
              defaultValue={3}
              max={10}
              disabled={lockLimits}
            />
            <SliderInput
              label="what goes here"
              defaultValue={3}
              max={10}
              disabled={lockLimits}
            />
            <Divider />
            <CardActions>
              <Button variant="plain" color="neutral" sx={{ mr: 'auto' }}>
                Close
              </Button>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  onClick={() => setLockLimits((prevState) => !prevState)}
                >
                  {lockLimits ? 'Unlock limits' : 'Lock limits'}
                </Button>
                <Button>Add new card</Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={5}>
            <CreditCard
              name="Sandra Franzberger"
              number="1111222233334445"
              expirationDate="06/23"
              color="success"
            />
            <CreditCard
              name="Sandra Franzberger"
              number="1111222233334445"
              expirationDate="06/23"
              color="warning"
              issuer="Mastercard"
            />
            <CreditCard
              name="Sandra Franzberger"
              number="1111222233334445"
              expirationDate="06/23"
              color="danger"
            />
            <CreditCard
              name="Sandra Franzberger"
              number="1111222233334445"
              expirationDate="06/23"
              color="neutral"
            />
          </Stack>
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
