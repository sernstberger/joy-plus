import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import { Divider, IconButton, Stack, Switch } from '@mui/joy';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from 'react';

interface AppCardProps {
  imgSrc: string;
  title: string;
  content: string;
  installed?: boolean;
}

export function AppCard({
  imgSrc,
  title,
  content,
  installed = false,
}: AppCardProps) {
  const [isInstalled, setIsInstalled] = useState(installed);

  return (
    <Card variant="outlined">
      <Stack direction="row" spacing={2}>
        <Avatar
          src={imgSrc}
          sx={(theme) => ({
            '--Avatar-radius': theme.spacing(1),
            '--Avatar-size': '60px',
          })}
        />

        <div>
          <Typography level="body1">{title}</Typography>
          <Typography level="body2">{content}</Typography>
        </div>
      </Stack>
      <Divider inset="context" />
      <CardActions>
        <Button
          variant={isInstalled ? 'outlined' : 'solid'}
          color={isInstalled ? 'neutral' : 'primary'}
          sx={{ mr: 'auto' }}
          onClick={() => setIsInstalled(!isInstalled)}
        >
          {isInstalled ? 'Installed' : 'Install'}
        </Button>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="neutral" variant="plain" disabled={!isInstalled}>
            <SettingsOutlinedIcon />
          </IconButton>
          <Switch disabled={!isInstalled} />
        </Stack>
      </CardActions>
    </Card>
  );
}

export default AppCard;
