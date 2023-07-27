import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from '@mui/joy';

interface AppCardProps {
  imgSrc: string;
  imgSrcSet: string;
  imgAlt: string;
  title: string;
  content: string;
}

export function AppCard({
  imgSrc,
  imgSrcSet,
  imgAlt,
  title,
  content,
}: AppCardProps) {
  return (
    <Card variant="outlined">
      {/* <CardCover> */}
      <Stack direction="row" spacing={2}>
        <Avatar
          src={imgSrc}
          // srcSet={imgSrcSet}
          // loading="lazy"
          alt={imgAlt}
        />
        {/* </CardCover> */}

        <div>
          <Typography level="body1" marginTop={1}>
            {title}
          </Typography>
          <Typography level="body2">{content}</Typography>
        </div>
      </Stack>
      <Divider inset="context" />
      <CardContent orientation="horizontal">
        <Button variant="solid" color="primary">
          Read more
        </Button>
        <IconButton>button</IconButton>
        <Switch checked />
      </CardContent>
    </Card>
  );
}

export default AppCard;
