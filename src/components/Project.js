import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      description,
      link,
      source,
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return projectData && projectData.length > 0 ? (
    <section id="projects">
      <div className="max-w-6xl px-5 mx-auto text-center pb-32 mt-16">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3  mt-16">
          {projectData &&
            projectData.map((project, index) => (
              <div
                className="flex flex-col items-center p-6 space-y-6 w-full aspect-w-1 aspect-h-1 bg-veryLightGray rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                key={index}
              >
                <h5 className="text-lg font-bold">{project.title}</h5>
                <p className="text-sm text-darkGrayishBlue">
                  {project.description}
                </p>
                <div className="flex justify-center space-x-6 md:justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex p-3 px-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="flex p-3 px-3 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                  >
                    View Source
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  ) : (
    <div className="max-w-6xl px-5 mx-auto text-center pb-32 my-32">
      <h2 className="text-4xl font-bold text-center">
        Portfolio coming soon...🙃
      </h2>
    </div>
  );
};

export default Project;
