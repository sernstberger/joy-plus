import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box } from '@mui/joy';

export function Post() {
  return (
    <div>
      <Card sx={{ minHeight: '280px', padding: 0 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 0px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 100px)',
              backdropFilter: 'blur(5px) grayscale(50%)',
              padding: 2,
            }}
          >
            <Typography textColor="#fff">A caption goes here</Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography
        level="h2"
        // fontSize="lg"
        //  mb={1}
      >
        Yosemite National Park
      </Typography>
      <Typography
      // startDecorator={<LocationOnRoundedIcon />}
      // textColor="neutral.300"
      >
        California, USA
      </Typography>
    </div>
  );
}

export default Post;
