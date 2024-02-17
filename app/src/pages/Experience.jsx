import '../App.css';

function ExperiencePage() {
  return (
    <>
      <main>
        <section className='home-wrapper'>
          <div className='job-presentation'>
            <div className='description-container'>
              <h1 className='max-emphasis'>2022</h1>
              <h2 className='company-name'>Ubisoft</h2>
              <p className='description-content'>
                <ul className='job-description'>
                  <li>
                    Integrated debugging functionalities into the ImGui debugging tool utilized in
                    Assassin's Creed development.
                  </li>
                  <li>
                    Addressed hotkey conflicts, enhancing productivity with a streamlined workflow
                    for development teams.
                  </li>
                  <li>
                    Conducted in-depth analysis of thread synchronization anomalies within the order
                    of input event handling, ensuring seamless performance.
                  </li>
                </ul>
              </p>
            </div>
            <div className='headShot-wrapper'>
              <div className='logo-container'>
                <img
                  alt='thierry-picture'
                  id='headShot'
                  src='../assets/Ubisoft_logo.png'
                  className='company-logo'
                ></img>
              </div>
              <span className='duration-description'>Internship May 2022 - Aug 2022 · 4 mos</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ExperiencePage;
