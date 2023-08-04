import { useEffect, useState } from 'react';
import { Card, IconButton, LinearProgress, Stack, Typography } from '@mui/joy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

export interface PlayerControlsProps {
  mediaLength: number; // length of the media in seconds
}

export function PlayerControls({ mediaLength }: PlayerControlsProps) {
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // current time of the media in seconds

  function formatTime(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  // update currentTime every second if the media is playing
  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime < mediaLength) {
            return prevTime + 1;
          } else {
            // stop the media when it reaches the end
            setPlaying(false);
            return mediaLength;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playing, mediaLength]);

  // calculate progress bar value
  const progress = (currentTime / mediaLength) * 100;

  return (
    <Card variant="outlined">
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          variant="plain"
          color={shuffle ? 'primary' : 'neutral'}
          onClick={() => setShuffle(!shuffle)}
        >
          <ShuffleIcon />
        </IconButton>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setCurrentTime(0)}
        >
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={() => setPlaying(!playing)} color="primary">
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setCurrentTime(mediaLength)}
        >
          <SkipNextIcon />
        </IconButton>
        <IconButton
          variant="plain"
          color={repeat ? 'primary' : 'neutral'}
          onClick={() => setRepeat(!repeat)}
        >
          <RepeatIcon />
        </IconButton>
      </Stack>
      <LinearProgress determinate value={progress} />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography level="body-xs">{formatTime(currentTime)}</Typography>
        <Typography level="body-xs">{formatTime(mediaLength)}</Typography>
      </Stack>
    </Card>
  );
}

export default PlayerControls;
