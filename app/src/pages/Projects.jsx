import '../App.css';
import ProjectPost from '../components/ProjectPost';

function ProjectPage() {
  const robot = {
    year: `Winter 2021`,
    title: `Line Following Robot with Obstacle Avoidance`,
    description1: `Integrated debugging functionalities into the ImGui debugging tool utilized in Assassin's Creed development.`,
    description2: `Addressed hotkey conflicts, enhancing productivity with a streamlined workflow for development teams.`,
    description3: `Conducted in-depth analysis of thread synchronization anomalies within the order of input event handling, ensuring seamless performance.`,
    duration: `May 2022 - Aug 2022 · 4 months internship`,
  };

  const project = [robot];

  return (
    <>
      <main>
        <section className='home-wrapper'>
          {project.map((project) => (
            <ProjectPost project={project} key={project} />
          ))}
        </section>
      </main>
    </>
  );
}

export default ProjectPage;
