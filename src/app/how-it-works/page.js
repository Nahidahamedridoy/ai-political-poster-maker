import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base text-main">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">How It Works Placeholder</h1>
      </main>
      <Footer />
    </div>
  );
}
