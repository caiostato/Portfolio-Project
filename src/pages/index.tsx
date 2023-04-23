import { Header } from "@/Components/Header";
import { HomeContent } from "@/Components/HomeContent";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <header>
        <Header />
      </header>
      <main>
        <HomeContent />
      </main>
    </div>
  );
}
