import '../App.css';

function HomePage() {
  return (
    <>
      <main>
        <section className='home-wrapper'>
          <div className='personal-presentation'>
            <div className='description-container'>
              <h1 className='max-emphasis'>Hello world!</h1>
              <p className='description-content'>
                <p>
                  Hello! Allow me to introduce myself, I'm a software engineering student at
                  Polytechnique Montreal.
                </p>

                <p>
                  I have acquired valuable professional experience in both the gaming industry and
                  cybersecurity. These roles have significantly contributed to my skill set,
                  providing me with comprehensive knowledge and expertise in these dynamic fields.
                </p>

                <p>
                  I genuinely love diving into new tech stuff and teaming up with people. I'm always
                  up for getting my hands dirty in fresh projects. To me, software is all about
                  being creative, solving real problems, and working together. Can't wait to see
                  what's next!
                </p>
              </p>
            </div>
            <div className='headShot-wrapper'>
              <img
                alt='thierry-picture'
                id='headShot'
                src='../assets/headshot2.jpg'
                className='headShot'
              ></img>
              <span className='headShot-description'>Thierry Beaulieu</span>
              <span className='headShot-description'>Author of this website</span>
            </div>
          </div>

          <div className='award-presentation'>
            <div className='presentation-wrapper '>
              <div className='presentation-container'>
                <img alt='won-prices' id='CQI-2024' src='../assets/cqi-2024.JPG'></img>
              </div>
            </div>
            <div className='award-description'>
              Winners of the 2024 edition of the Quebec Engineering Competition for the programming
              category (CEC)
            </div>
            <div className='award-description'>
              From left to right: Juge #1, Juge #2, Dominic Hains, Maxime Gaudreau, Gabriel Côté,
              Thierry Beaulieu (me), Juge #3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
