import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { VideoDetails,  Feed, SearchFeed, Navbar, ChannelDetails } from './components';
import { Box } from '@mui/material';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' exact element={<VideoDetails />} />
          <Route path='/channel/:id' exact element={<ChannelDetails />} />
          <Route path='/search/:searchterm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
