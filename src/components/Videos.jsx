import { Stack, Box, Skeleton } from '@mui/material';
import { VideoCard, ChannelCard } from './';

export default function Videos({ videos, direction }) {
  const skeletonData = new Array(20).fill({}, 0);

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos?.length
        ? videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        : skeletonData.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                width: 300,
                height: 300,
              }}
            >
              <Skeleton
                variant='rectangular'
                width='100%'
                height='65%'
                sx={{
                  backgroundColor: 'lightgray',
                }}
              />
              <Skeleton
                variant='text'
                width='85%'
                sx={{
                  fontSize: '1.3rem',
                  backgroundColor: 'rgba(230, 230, 255, 0.9)',
                }}
              />
              <Skeleton
                variant='text'
                width='65%'
                sx={{
                  fontSize: '1.3rem',
                  backgroundColor: 'rgba(230, 230, 255, 0.9)',
                }}
              />
              <Skeleton
                variant='text'
                width='40%'
                sx={{
                  fontSize: '1rem',
                  backgroundColor: 'rgba(230, 230, 255, 0.9)',
                }}
              />
            </Box>
          ))}
    </Stack>
  );
}

