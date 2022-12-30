import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { ChannelCard, Videos } from './';
import { fetchFromAPI } from '../utils/apiDataFetch';

export default function ChannelDetails() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetchFromAPI(`channels?part=snippet&id=${id}`, signal).then((data) =>
      setChannelDetail(data?.items[0]),
    );

    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date`,
      signal,
    ).then((data) => setVideos(data?.items));

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

