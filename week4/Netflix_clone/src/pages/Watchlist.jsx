import meg from '../assets/meg.jpg';
import tenet from '../assets/tenet.jpg';
import mental from '../assets/mentalist.jpg';
import dark from '../assets/dark.jpg';


function Watchlist() {
  return (
    <>
    <p className='logo-title red-font-small'>WATCHLIST</p>
    <div className='card-row'>
        <div className="card">
            <img className='card-image' src={meg} alt="card pic"></img>
            <h2 className='card-title'>The Meg</h2>
            <p className='card-text'>"The Meg" on Netflix is an action thriller about a massive,
                 prehistoric shark called a Megalodon that attacks a deep-sea submersible, trapping 
                 a research crew at the bottom of the ocean. </p>
        </div>
        <div className="card">
            <img className='card-image' src={tenet} alt="card pic"></img>
            <h2 className='card-title'>Tenet</h2>
            <p className='card-text'>"Tenet," available on Netflix, is a 2020 science fiction action thriller 
                directed by Christopher Nolan. The film follows an undercover agent who learns to manipulate the 
                flow of time to prevent a global catastrophe</p>
        </div>
        <div className="card">
            <img className='card-image' src={mental} alt="card pic"></img>
            <h2 className='card-title'>The Mentalist</h2>
            <p className='card-text'>The Mentalist is a crime drama series centered around Patrick Jane,
                 a former self-proclaimed psychic who now works as a consultant for the California Bureau of Investigation (CBI)</p>
        </div>
        <div className="card">
            <img className='card-image' src={dark} alt="card pic"></img>
            <h2 className='card-title'>Dark</h2>
            <p className='card-text'>"Dark" is a German science fiction thriller series on Netflix that 
                follows the disappearance of two children in the town of Winden, which exposes the secrets
                 and fractured relationships of four families</p>
        </div>
    </div>
    </>
  );
}

export default Watchlist;