import suits from '../assets/suits.png';
import whitecollar from '../assets/whitecollar.png';
import kapil from '../assets/kapil.png';
import stranger from '../assets/stranger.jpg';

function Home() {
  return (
    <div>
      <p className='logo-title red-font-small'>TRENDING NOW</p>

      <div className="card">
            <img className='card-image' src={suits} alt="card pic"></img>
            <h2 className='card-title'>Suits <button onClick={() => handleAddToWatchlist(movie)}>+</button></h2>
            <p className='card-text'>"Suits" is a legal drama about Harvey Specter, a top New York lawyer, 
                who hires college dropout Mike Ross as his associate despite Mike not having a law degree. 
                The series follows their efforts to win cases and keep Mike's secret from being exposed.</p>
        </div>
        <div className="card">
            <img className='card-image' src={whitecollar} alt="card pic"></img>
            <h2 className='card-title'>White Collar <button onClick={() => handleAddToWatchlist(movie)}>+</button></h2>
            <p className='card-text'>"White Collar" is a police procedural drama about
                a con artist, Neal Caffrey, and FBI Agent Peter Burke. After escaping prison, 
                Neal proposes to help the FBI catch other criminals for his freedom. 
                The series explores their partnership as they work together. </p>
        </div>
        <div className="card">
            <img className='card-image' src={kapil} alt="card pic"></img>
            <h2 className='card-title'>The Great Kapil Sharma Show <button onClick={() => handleAddToWatchlist(movie)}>+</button></h2>
            <p className='card-text'>"The Kapil Sharma Show" is a comedy talk show where Kapil Sharma engages with celebrity guests,
                 often promoting their latest films, through humorous signature wit. </p>

        </div>
        <div className="card">
            <img className='card-image' src={stranger} alt="card pic"></img>
            <h2 className='card-title'>Stranger Things <button onClick={() => handleAddToWatchlist(movie)}>+</button></h2>
            <p className='card-text'>"Stranger Things" is a science fiction horror drama series revolving around the 
                mysterious disappearance of a young boy and secret govt experiments and the supernatural forces, 
                and a peculiar young girl with psychokinetic abilities. </p>
        </div>
    </div>
  );
}

export default Home;
