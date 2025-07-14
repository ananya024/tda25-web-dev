
import '../index.css';
import netflix from '../assets/netflix.mp4';

function LogoVid()
{
    return(
        <>
        <video
        src={netflix}
        autoPlay
        muted
        playsInline
        onEnded={() => setIsIntroDone(true)}
        style={{ width: '50%', height: 'auto' }}
        />
        </>
    );
}

export default LogoVid

