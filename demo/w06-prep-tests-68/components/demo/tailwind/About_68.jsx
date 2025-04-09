import aboutSvg from '../assets/about.svg';
import SectionTitle_68 from './SectionTitle_68';

const About_68 = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle_68 text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laboriosam iste corporis, hic deserunt totam quo explicabo
            praesentium nostrum provident fugit neque recusandae, sed labore
            nobis maiores enim non magnam est quia obcaecati illum impedit.
            Laudantium dolores nihil officia magni ducimus magnam explicabo
            libero optio quibusdam! Eius error eos laudantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About_68;
