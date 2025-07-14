import './index.css';
import { useState } from 'react';
import netflix from '../src/assets/netflix.mp4'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Movies from './pages/Movies.jsx';
import TVShows from './pages/TVShows.jsx';
import Watchlist from './pages/Watchlist.jsx';



function App() 
{
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <>
      {!isIntroDone ? (<video
                        src={netflix}
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setIsIntroDone(true)}
                        style={{objectFit: 'cover',
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100vh',
                                zIndex: '-1'}}
                        />
                      ) : 
                      (
                        <BrowserRouter>
                          <Navbar />
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/tvshows" element={<TVShows />} />
                            <Route path="/watchlist" element={<Watchlist />} />
                          </Routes>
                        </BrowserRouter>
                      )}

    </>
  );
}

export default App;
