import { Link } from "react-router-dom"
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 358, md: 320, },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : '#'}>
        {videoId && snippet ? (
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: { xs: '100%', sm: 358 }, height: 180 }}
          />
        ) : (
          <Skeleton variant='rectangular' width={358} height={180} />
        )}
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106 }}>
        <Link to={videoId ? `/video/${videoId}` : '#'}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet?.title ? snippet.title.slice(0, 60) : <Skeleton />}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : '#'
          }
        >
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle ? (
              <>
                {snippet.channelTitle}
                <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 5 }} />
              </>
            ) : (
              <Skeleton />
            )}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
