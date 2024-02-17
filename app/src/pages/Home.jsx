import '../App.css';

function HomePage() {
  return (
    <>
      <main>
        <section>
          <div className='presentation-container'>
            <img alt='won-prices' id='CQI-2024' src='../assets/cqi-2024.JPG'></img>
          </div>

          <h2>Home page</h2>
          <div className='headShot-container'>
            <img
              alt='thierry-picture'
              id='headShot'
              src='../assets/headshot2.jpg'
              className='headShot'
            ></img>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
