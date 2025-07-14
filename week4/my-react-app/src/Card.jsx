import profPc from './assets/download.png'
function Card()
{
    return(
        <div className="card">
            <img className='card-image' src={profPc} alt="card pic"></img>
            <h2 className='card-title'>This is how card looks</h2>
            <p className='card-text'>making a card component</p>
        </div>
    );
}

export default Card