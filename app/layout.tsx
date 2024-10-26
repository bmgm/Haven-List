import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Haven List Properties",
  description: "A property  rental site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-700 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
