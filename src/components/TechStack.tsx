import React from "react";

export const TechStack: React.FC = () => {
  const tech = [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Prisma",
    "PostgreSQL",
    "AWS",
    "Tailwind CSS",
  ];

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-zinc-700 dark:bg-zinc-800 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
