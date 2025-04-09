const SkillsCard_68 = ({ title, icon, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300 p-8 flex flex-col items-start'>
      <div className='h-16 w-16 flex-shrink-0'>{icon}</div>
      <h2 className='mt-7 text-xl font-bold text-gray-900'>{title}</h2>
      <p className='mt-2 text-slate-700 leading-loose'>{text}</p>
    </article>
  );
};

export default SkillsCard_68;
