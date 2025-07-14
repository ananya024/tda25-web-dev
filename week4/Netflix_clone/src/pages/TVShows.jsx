import lawyer from '../assets/lawyer.jpg';
import lying from '../assets/lying.jpg';
import wed from '../assets/wed.jpg';
import b99 from '../assets/b99.jpg';


function TVShows() {
  return (
    <>
    <p className='logo-title red-font-small'>TV SHOWS</p>
    <div className='card-row'>
        <div className="card">
            <img className='card-image' src={lawyer} alt="card pic"></img>
            <h2 className='card-title'>Lincon Lawyer</h2>
            <p className='card-text'>"The Lincoln Lawyer" on Netflix is a legal 
                drama series following Mickey Haller, a Los Angeles defense attorney
                 who operates his practice out of the back of his Lincoln Town Car. </p>
        </div>
        <div className="card">
            <img className='card-image' src={lying} alt="card pic"></img>
            <h2 className='card-title'>One Of Us Is Lying</h2>
            <p className='card-text'>"One of Us Is Lying" is a Netflix series based on the novel of 
                the same name by Karen M. McManus. It's a teen drama mystery that revolves around five
                 high school students who enter detention, but only four leave alive.  </p>
        </div>
        <div className="card">
            <img className='card-image' src={wed} alt="card pic"></img>
            <h2 className='card-title'>Wednesday</h2>
            <p className='card-text'>"Wednesday" is a supernatural mystery comedy 
                series on Netflix, focusing on Wednesday Addams' experiences at Nevermore Academy.</p>
        </div>
        <div className="card">
            <img className='card-image' src={b99} alt="card pic"></img>
            <h2 className='card-title'>Brooklyn 99</h2>
            <p className='card-text'>Brooklyn Nine-Nine is a comedy series on Netflix that 
                follows the antics of the detectives at the 99th Precinct in Brooklyn, New York. 
                The show centers around Jake Peralta, a talented but immature detective, and his 
                interactions with his quirky colleagues and their new, serious captain, Raymond Holt. </p>
        </div>
    </div>
    </>
  );
}

export default TVShows;