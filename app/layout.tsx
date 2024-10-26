import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/app/ui/globals.css";

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
      <body className="bg-gray-700">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
