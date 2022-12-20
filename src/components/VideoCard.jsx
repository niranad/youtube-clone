import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from "../utils/constants";

export default function VideoCard({ video: { id: { videoId }, snippet }}) {
  return (
    <Card sx={{ width: { md: 320, xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ?  `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: 106 }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 5 }} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}
