import '../App.scss';
import Card from '../components/Card';

function ProjectsPage() {
  return (
    <>
      <main>
        <section className='py-5 text-center container'>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>My projects</h1>
              <p className='lead text-body-secondary'>
                The following section contains some of the projects I've worked on through the
                years.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
