import './index.css';
import { useState } from 'react';
import tda from '../src/assets/tda.mp4'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';



function App() 
{
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <>
      {!isIntroDone ? (<video
                        src={tda}
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
                          </Routes>
                        </BrowserRouter>
                      )}

    </>
  );
}

export default App;
