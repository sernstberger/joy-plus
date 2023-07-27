import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';

interface PostProps {
  imgSrc: string;
  imgSrcSet: string;
  imgAlt: string;
  title: string;
  content: string;
}

export function Post({ imgSrc, imgSrcSet, imgAlt, title, content }: PostProps) {
  return (
    <div>
      <Card sx={{ minHeight: '280px', padding: 0 }}>
        <CardCover>
          <img src={imgSrc} srcSet={imgSrcSet} loading="lazy" alt={imgAlt} />
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
            <Typography textColor="#fff" level="body2">
              {imgAlt}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography level="h2" marginTop={1}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
      <Button variant="solid" color="primary" sx={{ marginTop: 2 }}>
        Read more
      </Button>
    </div>
  );
}

export default Post;
