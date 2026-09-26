import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-base text-main">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Create Poster Placeholder</h1>
      </main>
      <Footer />
    </div>
  );
}
