import tda from '../assets/tda.jpg';

function Home() {
  return (
    <div>
      <p className='logo-title red-font-small'>The Data Alchemists</p>

      <div className="card">
            <img className='card-image' src={tda} alt="card pic"></img>
            <h2 className='card-title'>TDA</h2>
            <p className='card-text'>The Data Alchemists is an all-things-data club. We cover the entire spectrum of data 
                science from Data Engineering to Analytics and Visualization to Machine Learning and Deep Learning. With the 
                exponentially growing amount available data, the doors for many new areas in the field of Data Science have opened.
                 Artificial Intelligence and Large Language Models are becoming an inseparable part of our lives.
            </p>
        </div>
        <div className="card">
            <h2 className='card-title'>AIM</h2>
            <p className='card-text'>The aim of the club is to keep up with the pace and growth of the field of data science and provide to
                  the students an opportunity to be a part of this domain. The club serves as a platform to learn new skills,
                   leverage and improve existing skillset via projects and provide a means for collaboration between students 
                   with similar interests.</p>
        </div>
        <div className="card">
            <h2 className='card-title'> Also Read</h2>
            <p className='card-text'>The club also increases data science awareness via an online open community with no joining restrictions.
                    For a wide coverage of the field there are dedicated domains for each aspect of data science. Catering 
                    to the massive growth in the fields of Computer Vision and Natural Language Processing, two individual 
                    domains have been formed.</p>
        </div>
    </div>
  );
}

export default Home;
