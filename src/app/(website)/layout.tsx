import Header from "../../components/layout/Header";
import Footer from "../..//components/layout/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Header />

      <main>{children}</main>

      {/* <ScrollSideMenu /> */}

      <Footer />
    </div>
  );
}