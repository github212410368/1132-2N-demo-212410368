import aboutSvg from '../assets/about.svg';
import SectionTitle_68 from './SectionTitle_68';

const About_68 = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='' />
        <article>
          <SectionTitle_68 text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            architecto ut nam impedit quod temporibus. Aperiam expedita in quasi
            vitae dolorem? Blanditiis, vel ut consectetur alias sed deserunt
            accusantium nesciunt.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About_68;
