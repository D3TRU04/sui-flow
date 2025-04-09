import { StreamNavbar } from '@/components/StreamNavbar';
import { Footer } from '@/components/Footer';

export default function StreamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <StreamNavbar />
      <main className="flex-grow mt-16 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
} 