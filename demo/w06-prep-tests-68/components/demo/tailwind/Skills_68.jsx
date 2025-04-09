import { skills } from '../data';
import SectionTitle_68 from './SectionTitle_68';
import SkillsCard_68 from './SkillsCard_68';

const Skills_68 = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle_68 text='tech stack' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard_68 key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills_68;
