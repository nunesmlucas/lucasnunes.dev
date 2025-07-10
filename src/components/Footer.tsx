import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  const trackClick = (platform: string) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "footer_link_click", {
        event_category: "Footer",
        event_label: platform,
        value: 1,
      });
    }
  };

  return (
    <footer className="py-10 text-center">
      <div className="flex justify-center gap-6 text-3xl mb-4">
        <a
          href="https://github.com/nunesmlucas"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("GitHub")}
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/nunesmlucas"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("LinkedIn")}
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Lucas Nunes
      </p>
    </footer>
  );
};
