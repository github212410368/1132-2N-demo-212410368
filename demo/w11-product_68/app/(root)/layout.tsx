export const metadata: Metadata = {
  title: 'tku_68',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <main className='flex-1 wrapper'>{children}</main>
    </div>
  );
}
