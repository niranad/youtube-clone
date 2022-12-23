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
            <Box key={idx}>
              <Skeleton variant='rectangular' width={300} height={300} />
            </Box>
          ))}
    </Stack>
  );
}




