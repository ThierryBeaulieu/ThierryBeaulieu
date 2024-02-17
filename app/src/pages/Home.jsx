import '../App.css';

function HomePage() {
  return (
    <>
      <main>
        <section>
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
