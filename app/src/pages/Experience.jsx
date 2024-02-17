import '../App.css';
import Post from '../components/Post';

function ExperiencePage() {
  const ubisoft = {
    year: `Summer 2022`,
    title: `Game Engine Developer Intern`,
    company: 'Ubisoft',
    description1: `Integrated debugging functionalities into the ImGui debugging tool utilized in Assassin's Creed development.`,
    description2: `Addressed hotkey conflicts, enhancing productivity with a streamlined workflow for development teams.`,
    description3: `Conducted in-depth analysis of thread synchronization anomalies within the order of input event handling, ensuring seamless performance.`,
    duration: `May 2022 - Aug 2022 · 4 months internship`,
    logo: `../assets/Ubisoft_logo.png`,
  };

  const genetec = {
    year: `Winter 2023`,
    title: `Firmware Engineer Intern`,
    company: 'Genetec',
    description1: `Efficiently tackled multiple bugs and regressions on custom images generated through the Yocto Project, resulting in uninterrupted device production and a substantial improvement in firmware effectiveness.`,
    description2: `Engineered a firmware update that enables cameras to seamlessly migrate from Windows to Linux operating systems, significantly extending product lifespan, reducing maintenance costs, and up to a 45% reduction in disk space usage.`,
    description3: `Acquired valuable knowledge about firmware, software, and hardware components of IoT devices, specifically cameras.`,
    duration: `Jan 2023 - Apr 2023 · 4 months internship`,
    logo: `../assets/genetec_logo.png`,
  };

  const autodesk = {
    year: `Summer 2023`,
    title: `Maya Software Engineering Intern`,
    company: 'Autodesk',
    description1: `Resolved longstanding legacy issues persisting for over a decade by leveraging an in-depth grasp of compilers. Skillfully diagnosed and rectified these issues, resulting in enhanced system stability and minimized occurrences of crashes of Maya.`,
    description2: `Played a key role in the migration from Qt5 to Qt6, enabling the adoption of new Qt6 features. During this transition, adeptly addressed numerous bugs and challenges, leveraging advanced proficiency in Python and C++ as well as expert debugging skills.`,
    description3: `Streamlined user experience by restructuring the presentation of user plugins for editing, leading to a reduction in complexity and improved Maya's usability.`,
    duration: `May 2023 - Aug 2023 · 4 months internship`,
    logo: `../assets/autodesk-logo.svg`,
  };

  const polymtl = {
    year: `2021 -`,
    title: `Teaching Assistant`,
    company: 'Polytechnique Montreal',
    description1: `Developed educational materials for students to enhance their understanding of fundamental web development technologies, including HTML, Javascript, and CSS.`,
    description2: `Provided students with exposure to various frameworks and libraries, such as React, MongoDb, and Node.js, to expand their skills in web development.`,
    description3: `Developed educational materials whose focus is on learning object-oriented programming in C++.`,
    duration: `2021 - Present · 3 years`,
    logo: `../assets/poly.png`,
  };

  const experiences = [ubisoft, genetec, autodesk, polymtl];

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
