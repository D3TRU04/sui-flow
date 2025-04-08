import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
} 