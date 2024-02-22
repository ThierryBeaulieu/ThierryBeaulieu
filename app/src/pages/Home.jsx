import '../App.css';

function HomePage() {
  return (
    <>
      <main>
        <section>
          <div className='container'>
            <div className='row flex-md-row-reverse'>
              <div className='col-md-5 col-sm-auto d-flex justify-content-center align-items-center'>
                <div className='headShot-container'>
                  <img
                    alt='thierry-picture'
                    id='headShot'
                    src='./assets/headshot2.jpg'
                    className='headShot'
                  />
                </div>
              </div>
              <div className='col-md-7 col-sm-auto'>
                <h1 className='display-1'>Hello world!</h1>
                <div
                  className='description-content text-justify'
                  style={{ padding: '0', margin: '0' }}
                >
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
                    I genuinely love diving into new tech stuff and teaming up with people. I'm
                    always up for getting my hands dirty in fresh projects. To me, software is all
                    about being creative, solving real problems, and working together. Can't wait to
                    see what's next!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
