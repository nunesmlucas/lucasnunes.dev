import { Header } from "./components/Header";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import Threads from "./components/Threads";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white animate-fade-in">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.098, 0.294, 0.69]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex-grow">
        <Header />
        <TechStack />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
