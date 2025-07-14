import '../index.css';
import me from '../assets/me.jpg';
import logo from '../assets/logo.png';
import netflix from '../assets/netflix.mp4';

import { Link } from 'react-router-dom';



function Navbar()
{
    return(
        <>
        <div className="image-row">
            <img src={logo} alt="img2" />
            <img src={me} alt="img1" />
        </div>

        <nav>
        <ul>
            <li><Link to="/"><u>Home</u></Link></li>
            <li><Link to="/movies"><u>Movies</u></Link></li>
            <li><Link to="/tvshows"><u>TV Shows</u></Link></li>
            <li><Link to="/watchlist"><u>Watchlist</u></Link></li>
        </ul>
        </nav>

        <br></br>
        </>
    );
}

export default Navbar