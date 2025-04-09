import { projects } from '../data';
import SectionTitle_68 from './SectionTitle_68';
import ProjectCard_68 from './ProjectsCard_68';
import ProjectsCard_68 from './ProjectsCard_68';

const Projects_68 = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle_68 text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard_68 key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects_68;
