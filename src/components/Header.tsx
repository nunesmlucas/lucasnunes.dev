import React from "react";
import TiltedCard from "./TiltedCard";
import StarBorder from "./StarBorder";

export const Header: React.FC = () => {
  return (
    <header className="relative group w-full max-w-5xl mx-auto px-4 py-16 h-[340px] overflow-hidden">
      {/* Left: Name & Title */}
      <div className="absolute top-0 left-0 h-full w-full md:w-1/2 flex flex-col justify-center text-center md:text-left transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
        <h1 className="text-4xl font-bold mb-2">Lucas Nunes</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
          Senior Full Stack Engineer · React / Node / TypeScript
        </p>
      </div>

      {/* Tilted Card that slides left */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-[-200%] z-20">
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

      {/* Right: About Me Reveal */}
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2 opacity-0 translate-x-[100px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 z-10 flex items-center justify-center">
        <div className="relative h-full w-full px-6 py-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="text-gray-400 dark:text-gray-300">
              I'm Lucas, a Senior Full Stack Engineer with 7+ years of
              experience building scalable web applications using modern
              technologies like React, Node.js, GraphQL, and AWS. Passionate
              about clean code, intuitive design, and solving hard problems.
            </p>
          </div>

          {/* Resume Button in Bottom Right */}
          <div className="absolute right-4" style={{ bottom: "3.0rem" }}>
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
                onClick={() =>
                  window.gtag?.("event", "click", {
                    event_category: "Resume",
                    event_label: "Resume Button Click",
                  })
                }
              >
                Resume
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </header>
  );
};
