import '../App.scss';

function ExperiencePost({ experience }) {
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
      </div>
    </div>
  );
}

export default ExperiencePost;
