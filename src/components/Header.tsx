import React, { useEffect, useState } from "react";
import TiltedCard from "./TiltedCard";
import StarBorder from "./StarBorder";
import DecryptedText from "./DecryptedText";

export const Header: React.FC = () => {
  const [autoOpen, setAutoOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setAutoOpen(true);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.gtag?.("event", "resume_click", {
      event_category: "Resume",
      event_label: "Resume Button Click",
    });
    setTimeout(() => {
      window.open("/resume.pdf", "_blank");
    }, 300); // Give GA time to fire
  };

  return (
    <header
      className={`relative group w-full max-w-5xl mx-auto px-4 py-16 h-auto md:h-[340px] flex flex-col md:flex-row items-center justify-between text-center md:text-left overflow-hidden ${
        autoOpen ? "auto-open" : ""
      }`}
      onMouseLeave={() => setAutoOpen(false)}
    >
      {/* Mobile Static Layout */}
      <div className="md:hidden flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Lucas Nunes</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
          <DecryptedText
            text="Senior Full Stack Engineer · React / Node / TypeScript"
            animateOn="view"
            characters="ABCD1234!?"
            speed={30}
            sequential={true}
            revealDirection="start"
          />
        </p>
        <TiltedCard
          imageSrc="/avatar.jpg"
          altText="Lucas Avatar"
          captionText="Lucas Nunes"
          containerHeight="280px"
          containerWidth="280px"
          imageHeight="280px"
          imageWidth="280px"
          rotateAmplitude={10}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
        />
        <div className="max-w-md text-center px-4">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-gray-400 dark:text-gray-300 mb-4">
            I'm Lucas, a Senior Full Stack Engineer with 7+ years of experience
            building scalable web apps using modern tech like React, Node.js,
            GraphQL, and AWS.
          </p>
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="2.5s"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              onClick={handleClick}
            >
              Resume
            </a>
          </StarBorder>
        </div>
      </div>

      {/* Desktop Animated Layout */}
      <div className="hidden md:flex w-full h-full relative">
        {/* Left: Name + Title */}
        <div className="absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-[.auto-open]:opacity-0 z-10 px-4">
          <h1 className="text-4xl font-bold mb-2">Lucas Nunes</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
            <DecryptedText
              text="Senior Full Stack Engineer · React / Node / TypeScript"
              animateOn="view"
              characters="ABCD1234!?"
              speed={30}
              sequential={true}
              revealDirection="start"
            />
          </p>
        </div>

        {/* Center: Avatar */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-[-120%] group-[.auto-open]:translate-x-[-120%] z-20 w-1/2 flex justify-center">
          <TiltedCard
            imageSrc="/avatar.jpg"
            altText="Lucas Avatar"
            captionText="Lucas Nunes"
            containerHeight="280px"
            containerWidth="280px"
            imageHeight="280px"
            imageWidth="280px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
        </div>

        {/* Right: About Me */}
        <div className="absolute right-0 top-1/2 transform translate-x-[100%] -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-[.auto-open]:translate-x-0 z-20 w-1/2 flex justify-center">
          <div className="relative h-full w-full px-6 py-8 flex flex-col justify-between max-w-md">
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              I'm Lucas, a Senior Full Stack Engineer with 7+ years of
              experience building scalable web applications using modern
              technologies like React, Node.js, GraphQL, and AWS. Passionate
              about clean code, intuitive design, and solving hard problems.
            </p>
            <div className="absolute right-4 bottom-4">
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="2.5s"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onClick={handleClick}
                >
                  Resume
                </a>
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
