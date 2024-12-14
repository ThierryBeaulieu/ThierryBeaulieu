import '../App.scss';

function ProjectPost({ project }) {
  return (
    <div className='job-wrapper'>
      <div className='job-presentation'>
        <div className='description-container'>
          <h1 className='max-emphasis'>{project.year}</h1>
          <h2 className='company-name'>{project.company}</h2>
          <p className='description-content'>
            <ul className='job-description'>
              <li>{project.description1}</li>
              <li>{project.description2}</li>
              <li>{project.description3}</li>
            </ul>
          </p>
        </div>
        <div className='headShot-wrapper'>
          <div className='logo-container'>
            <img
              alt='compagny-picture'
              id='headShot'
              src={project.logo}
              className='company-logo'
            ></img>
          </div>
          <span className='duration-description'>{project.duration}</span>
        </div>
      </div>
      {project.linkedInSrc && (
        <iframe
          src={project.linkedInSrc}
          height='500'
          width='600'
          frameBorder='0'
          allowfullscreen=''
          title='Embedded post'
        ></iframe>
      )}
    </div>
  );
}

export default ProjectPost;
