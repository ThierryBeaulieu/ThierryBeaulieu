import '../App.scss';

function ExperiencePost({ experience }) {
  return (
    <div>
      <div>
        <div>
          <h1>{experience.year}</h1>
          <h2>{experience.company}</h2>
          <p>
            <ul>
              <li>{experience.description1}</li>
              <li>{experience.description2}</li>
              <li>{experience.description3}</li>
            </ul>
          </p>
        </div>
        <div>
          <div>
            <img
              alt='compagny-picture'
              id='headShot'
              src={experience.logo}
              className='company-logo'
            ></img>
          </div>
          <span>{experience.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePost;
