import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modetoggle_68 from './mode-toggle_68';

const Header_68 = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              height={48}
              width={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
          </Link>
        </div>
        <div className='flex justify-end'>
          <Button asChild variant='outline'>
            <Link href='/cart_68'>
              <ShoppingCart /> Cart_68
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href='/sign-in_68'>
              <UserIcon /> SignIn_68
            </Link>
          </Button>
          <Modetoggle_68 />
        </div>
      </div>
    </header>
  );
};

export default Header_68;
