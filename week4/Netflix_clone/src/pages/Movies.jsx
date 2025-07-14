import fd5 from '../assets/fd5.jpg';
import inception from '../assets/inception.jpg';
import nysm from '../assets/nysm.jpg';
import prestige from '../assets/prestige.jpg';


function Movies() {
  return (
    <>
    <p className='logo-title red-font-small'>MOVIES</p>
        
    <div className='card-row'>
        <div className="card">
            <img className='card-image' src={fd5} alt="card pic"></img>
            <h2 className='card-title'>Final Destination 5</h2>
            <p className='card-text'>On a trip with his coworkers, a man has a
                 terrifying vision of an imminent and catastrophic bridge collapse.
                  Lives are saved... but not for long.</p>
        </div>
        <div className="card">
            <img className='card-image' src={inception} alt="card pic"></img>
            <h2 className='card-title'>Inceptiion</h2>
            <p className='card-text'>"Inception," a 2010 science fiction thriller directed by Christopher Nolan, 
                follows Dom Cobb, a skilled thief who extracts secrets from people's dreams. 
                Cobb is given the inverse task: to plant an idea into a target's subconscious, a process called "inception". </p>
        </div>
        <div className="card">
            <img className='card-image' src={nysm} alt="card pic"></img>
            <h2 className='card-title'>Now You See Me</h2>
            <p className='card-text'>"Now You See Me" is a 2013 thriller about a group 
                of illusionists who rob banks and distribute the money to their audience during their magic shows.  </p>
        </div>
        <div className="card">
            <img className='card-image' src={prestige} alt="card pic"></img>
            <h2 className='card-title'>The Prestige</h2>
            <p className='card-text'>"The Prestige," now streaming on Netflix, 
                is a 2006 drama about two rival magicians in late 19th-century London, 
                Robert Angier and Alfred Borden, whose fierce competition leads to obsession, deception, and deadly consequences.  </p>
        </div>
    </div>
    </>
  );
}

export default Movies;