import '../App.scss';

function HomePage() {
  return (
    <>
      <main>
        <div className='container col-xxl-8 px-4 py-3'>
          <div className='row flex-lg-row align-items-center g-5'>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
                Programming Enthusiast
              </h1>
              <p className='lead'>
                Multi-disciplinary programmer with a diverse background in firmware development,
                game engine programming, and software architecture.
              </p>
            </div>

            <div className='col-12 col-lg-6'>
              <figure className='text-center'>
                <img
                  src='../assets/headshot2.jpg'
                  className='img-fluid border rounded-3 shadow-lg w-100'
                  alt='winner of the CQI 2024'
                  loading='lazy'
                />
              </figure>
            </div>
          </div>
        </div>

        <div className='px-4 pt-5 text-center border-bottom'>
          <div className='overflow-hidden'>
            <div className='container px-5'>
              <img
                src='../assets/cqi-2024.JPG'
                className='img-fluid border rounded-3 shadow-lg mb-2'
                alt='CQI winners'
                width='700'
                height='500'
                loading='lazy'
              />
              <figcaption className='mt-2'>
                <p>
                  <em>
                    Winners of the 2024 edition of the Quebec Engineering Competition for the
                    programming category (CEC)
                  </em>
                </p>
                <p>
                  <small>
                    From left to right: Juge #1, Juge #2, Dominic Hains, Maxime Gaudreau, Gabriel
                    Côté, Thierry Beaulieu (me), Juge #3
                  </small>
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
