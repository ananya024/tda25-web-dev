import '../index.css';
import logo from '../assets/logo.png';
import tda from '../assets/tda.jpg';

import { Link } from 'react-router-dom';



function Navbar()
{
    return(
        <>
        <div className="image-row">
            <img src={logo} alt="MIT" />
            <nav>
            <ul>
                <li><a href="https://www.manipal.edu/mit.html" className=''><u>Manipal Institute of Technology</u></a></li>
            </ul>
            </nav>
            <img src={tda} alt="TDA" className='tda'/>
        </div>

        <nav>
        <ul>
            <li><a href="https://www.manipal.edu/mit.html" className=''><u>About the Club</u></a></li>
        </ul>
        </nav>

        <br></br>
        </>
    );
}

export default Navbar