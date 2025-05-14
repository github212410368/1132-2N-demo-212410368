import { APP_NAME } from '@/lib/constants';

const Footer_68 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        © {currentYear} {APP_NAME}
      </div>
    </footer>
  );
};

export default Footer_68;
