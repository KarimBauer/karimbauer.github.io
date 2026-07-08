import About from "@/components/About";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="pb-28">
      <Sidebar />
      <div className="flex-1 md:ml-72">
        <About />
        <TechStack />
      </div>
    </main>
  );
}
