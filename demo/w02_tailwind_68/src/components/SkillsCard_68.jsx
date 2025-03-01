const SkillsCard_68 = ({ title, icon, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shdow-xl duration-300 p-8'>
        <div className='mb-4 '>{icon}</div>
        <h2 className='text-xl font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'> {text}</p>
    </article>
  );
};
export default SkillsCard_68;
