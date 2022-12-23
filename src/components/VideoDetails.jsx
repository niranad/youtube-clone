import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, Skeleton } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { VideoDetailsSkeleton, Videos } from './';
import { fetchFromAPI } from '../utils/apiDataFetch';

export default function VideoDetails() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`, signal).then(
      (data) => setVideoDetails(data.items[0]),
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`,
      signal,
    ).then((data) => setVideos(data.items));

    return () => {
      controller.abort();
    };
  }, [id]);

  const formatCount = (count) => {
    let digitsLen = String(count).length;

    if (digitsLen <= 3) return count;

    if (count > 999_999_999_999_999) return '> 999.9T';

    let values = { 1: 'K', 2: 'M', 3: 'B', 4: 'T' };
    let valueOrderFactor = parseInt((digitsLen - 1) / 3); // determine count order (Thousand or Million or Billion...)
    let valueOrder = 1000 ** valueOrderFactor;
    let approx = (count / valueOrder).toFixed(1);

    return approx + values[valueOrderFactor];
  };

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              className='react-player'
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold'>
              {videoDetails?.snippet?.title ? (
                videoDetails.snippet.title
              ) : (
                <Skeleton />
              )}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link
                to={
                  videoDetails?.snippet?.channelId
                    ? `/channel/${videoDetails.snippet.channelId}`
                    : '#'
                }
              >
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'
                >
                  {videoDetails?.snippet?.channelTitle ? (
                    <>
                      {videoDetails.snippet.channelTitle}
                      <CheckCircle sx={{ fonSize: 12, color: 'gray', ml: 5 }} />
                    </>
                  ) : (
                    <Skeleton />
                  )}
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {videoDetails?.statistics?.viewCount ? (
                    formatCount(videoDetails.statistics.viewCount) + ' views'
                  ) : (
                    <Skeleton />
                  )}
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {videoDetails?.statistics?.likeCount ? (
                    formatCount(videoDetails.statistics.likeCount) + ' likes'
                  ) : (
                    <Skeleton />
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
}

