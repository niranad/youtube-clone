import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { VideoDetails,  Feed, SearchFeed, Navbar, ChannelDetails } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchterm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
