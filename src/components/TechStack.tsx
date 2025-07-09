import React from "react";
import FadeContent from "./FadeContent";
import Magnet from "./Magnet";

export const TechStack: React.FC = () => {
  const techBadges = [
    {
      name: "React",
      src: "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge",
    },
    {
      name: "TypeScript",
      src: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge",
    },
    {
      name: "Node.js",
      src: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge",
    },
    {
      name: "GraphQL",
      src: "https://img.shields.io/badge/-GraphQL-E10098?logo=graphql&logoColor=white&style=for-the-badge",
    },
    {
      name: "Prisma",
      src: "https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge",
    },
    {
      name: "PostgreSQL",
      src: "https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge",
    },
    {
      name: "AWS",
      src: "https://img.shields.io/badge/-AWS-FF9900?logo=amazon-aws&logoColor=white&style=for-the-badge",
    },
    {
      name: "Docker",
      src: "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="overflow-x-auto md:overflow-visible px-2">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 mt-4">
            {techBadges.map(({ name, src }) => (
              <div key={name} className="md:inline-block hidden">
                <Magnet padding={80} magnetStrength={4}>
                  <img
                    src={src}
                    alt={`${name} badge`}
                    className="h-8 rounded-full"
                    draggable={false}
                  />
                </Magnet>
              </div>
            ))}

            {techBadges.map(({ name, src }) => (
              <img
                key={name + "-mobile"}
                src={src}
                alt={`${name} badge`}
                className="md:hidden h-8 rounded-full"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};
