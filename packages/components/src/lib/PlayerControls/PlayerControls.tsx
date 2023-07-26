import { Card, InputProps, IconButton, LinearProgress, Stack } from '@mui/joy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useState } from 'react';

export interface PlayerControlsProps extends InputProps {
  // fieldName: string;
  // label: string;
  // helperText?: string;
  // defaultValue?: string;
}

export function PlayerControls({}: // fieldName,
// label,
// helperText = undefined,
// required = false,
// defaultValue,
PlayerControlsProps) {
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  return (
    <Card variant="outlined">
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton variant="plain" color={shuffle ? 'primary' : 'neutral'}>
          <ShuffleIcon />
        </IconButton>
        <IconButton variant="plain" color="neutral">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton
          sx={
            {
              // '--IconButton-size': '50px',
            }
          }
          onClick={() => setPlaying(!playing)}
          // color={playing ? 'primary' : 'neutral'}
          color="primary"
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton variant="plain" color="neutral">
          <SkipNextIcon />
        </IconButton>
        <IconButton variant="plain" color="neutral">
          <RepeatIcon />
        </IconButton>
      </Stack>
      <LinearProgress determinate value={24} />
    </Card>
  );
}

export default PlayerControls;
