import '../App.css';

function Post({ experience }) {
  return (
    <div className='job-wrapper'>
      <div className='job-presentation'>
        <div className='description-container'>
          <h1 className='max-emphasis'>{experience.year}</h1>
          <h2 className='company-name'>{experience.company}</h2>
          <p className='description-content'>
            <ul className='job-description'>
              <li>{experience.description1}</li>
              <li>{experience.description2}</li>
              <li>{experience.description3}</li>
            </ul>
          </p>
        </div>
        <div className='headShot-wrapper'>
          <div className='logo-container'>
            <img
              alt='compagny-picture'
              id='headShot'
              src={experience.logo}
              className='company-logo'
            ></img>
          </div>
          <span className='duration-description'>{experience.duration}</span>
        </div>
      </div>
      {experience.linkedInSrc && (
        <iframe
          src={experience.linkedInSrc}
          height='476'
          width='504'
          frameBorder='0'
          allowfullscreen=''
          title='Embedded post'
        ></iframe>
      )}
    </div>
  );
}

export default Post;
