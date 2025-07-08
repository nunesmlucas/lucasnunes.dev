import React from "react";
import TiltedCard from "./TiltedCard";
import StarBorder from "./StarBorder";

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold mb-2">Lucas Nunes</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
          Senior Full Stack Engineer · React / Node / TypeScript
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

      <div className="md:w-1/2 flex justify-center">
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
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
    </header>
  );
};
