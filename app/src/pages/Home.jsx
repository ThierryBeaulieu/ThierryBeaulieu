import '../App.scss';

function HomePage() {
  return (
    <>
      <main>
        <div className='container col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row align-items-center g-5 py-5'>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
                Responsive left-aligned hero with image
              </h1>
              <p className='lead'>
                Quickly design and customize responsive mobile-first sites with Bootstrap, the
                world’s most popular front-end open source toolkit, featuring Sass variables and
                mixins, responsive grid system, extensive prebuilt components, and powerful
                JavaScript plugins.
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>
                  Primary
                </button>
                <button type='button' className='btn btn-outline-secondary btn-lg px-4'>
                  Default
                </button>
              </div>
            </div>

            <div className='col-12 col-lg-6'>
              <figure className='text-center'>
                <img
                  src='../assets/cqi-2024.JPG'
                  className='img-fluid border rounded-3 shadow-lg w-100'
                  alt='winner of the CQI 2024'
                  loading='lazy'
                />
                <figcaption className='mt-2'>
                  <p>
                    Winners of the 2024 edition of the Quebec Engineering Competition for the
                    programming category (CEC)
                    <br />
                    From left to right: Juge #1, Juge #2, Dominic Hains, Maxime Gaudreau, Gabriel
                    Côté, Thierry Beaulieu (me), Juge #3
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
