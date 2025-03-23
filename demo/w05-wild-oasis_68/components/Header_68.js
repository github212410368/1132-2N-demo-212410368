import Navigation from '@/components/Navigation_68';
import Logo from '@/components/Logo_68';

function Header_68() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header_68;
