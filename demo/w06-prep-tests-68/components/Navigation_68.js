import Link from 'next/link';

export default function Navigation_68() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/quiz1/p1_68'
            className='hover:text-accent-400 transition-colors'
          >
            P1_68
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p2_68'
            className='hover:text-accent-400 transition-colors'
          >
            P2_68
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p3_68'
            className='hover:text-accent-400 transition-colors'
          >
            P3_68
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p4_68'
            className='hover:text-accent-400 transition-colors'
          >
            P4_68
          </Link>
        </li>
      </ul>
    </nav>
  );
}
