import { useState, useEffect, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/apiDataFetch';
import { useParams } from 'react-router-dom';

export default function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`, signal).then((data) =>
      setVideos(data.items),
    );

    return () => {
      controller.abort();
    };
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

