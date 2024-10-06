import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function LayoutNav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-0  flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center hover:text-blue-600 group"
          >
            <p className="font-bold pr-10  text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-600">
              LOGO
            </p>
          </Link>

          {/* Navbar */}
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
