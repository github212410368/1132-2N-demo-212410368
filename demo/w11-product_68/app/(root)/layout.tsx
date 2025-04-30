import { Metadata } from 'next';
import Header_68 from '@/components/shared/header_68';

export const metadata: Metadata = {
  title: 'tku_68',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen flex-col'>
      <Header_68 />
      <main>{children}</main>
    </div>
  );
}
