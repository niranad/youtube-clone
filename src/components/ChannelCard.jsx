import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';


export default function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link
        to={channelDetail?.id ? `/channel${channelDetail.id.channelId}` : '#'}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          {channelDetail?.snippet ? (
            <CardMedia
              image={channelDetail.snippet.thumbnails.high.url}
              alt={channelDetail.snippet.title}
              sx={{
                borderRadius: '50%',
                height: 180,
                width: 180,
                mb: 2,
                border: '1px solid #e3e3e3',
              }}
            />
          ) : (
            <Skeleton
              variant='circular'
              width={180}
              height={180}
              sx={{ mb: 2, border: '1px solid #e3e3e3', color: 'lightgray' }}
            />
          )}
          <Typography variant='h6'>
            {channelDetail?.snippet ? (
              <>
                {channelDetail.snippet.title}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: 5 }} />
              </>
            ) : (
              <Skeleton sx={{ color: 'lightgray' }} />
            )}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount,
              ).toLocaleString()}{' '}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

