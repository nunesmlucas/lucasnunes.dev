import { Header } from "./components/Header";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white animate-fade-in">
      <div className="flex-grow">
        <Header />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
}
