import '../App.css';
import Post from '../components/Post';

function ExperiencePage() {
  const ubisoft = {
    year: `Summer 2022`,
    company: 'Ubisoft',
    description1: `Integrated debugging functionalities into the ImGui debugging tool utilized in Assassin's Creed development.`,
    description2: `Addressed hotkey conflicts, enhancing productivity with a streamlined workflow for development teams.`,
    description3: `Conducted in-depth analysis of thread synchronization anomalies within the order of input event handling, ensuring seamless performance.`,
    duration: `May 2022 - Aug 2022 · 4 months internship`,
    logo: `../assets/Ubisoft_logo.png`,
  };

  const genetec = {
    year: `Winter 2023`,
    company: 'Genetec',
    description1: `Efficiently tackled multiple bugs and regressions on custom images generated through the Yocto Project, resulting in uninterrupted device production and a substantial improvement in firmware effectiveness.`,
    description2: `Engineered a firmware update that enables cameras to seamlessly migrate from Windows to Linux operating systems, significantly extending product lifespan, reducing maintenance costs, and up to a 45% reduction in disk space usage.`,
    description3: `Acquired valuable knowledge about firmware, software, and hardware components of IoT devices, specifically cameras.`,
    duration: `Jan 2023 - Apr 2023 · 4 months internship`,
    logo: `../assets/genetec_logo.png`,
  };

  const experiences = [ubisoft, genetec];

  return (
    <>
      <main>
        <section className='home-wrapper'>
          {experiences.map((experience) => (
            <Post experience={experience} key={experience} />
          ))}
        </section>
      </main>
    </>
  );
}

export default ExperiencePage;
