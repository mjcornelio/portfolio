import React from "react";

function ProjectsCards({
  preview,
  text,
  title,
  subheading,
  tech,
  github,
  demo,
  docs,
}) {
  return (
    <div className="relative p-10 pb-0 bg-light_secondary dark:bg-dark_secondary rounded-md drop-shadow-md mt-8 md:mt-0 w-full  cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl text-left mb-10 border-slate-400 dark:border-slate-700 border group">
      <div className="md:flex justify-between">
        <h3 className="font-semibold text-2xl lg:text-3xl  text-light_headline dark:text-dark_headline ">
          {title}
        </h3>
        {tech && (
          <div className="flex gap-2 md:mt-0 mt-5 flex-wrap ">
            {tech.map((item) => (
              <div
                className="bg-light dark:bg-dark p-2 rounded-md"
                key={item.name}
              >
                {" "}
                <i className={item.icon} title={item.name} key={item.name}></i>
              </div>
            ))}
          </div>
        )}
      </div>

      <h5 className="font-normal text-lg lg:text-xl mt-2  text-light_headline dark:text-dark_headline ">
        {subheading}
      </h5>
      <p className="text-sm leading-snug  dark:text-dark_paragraph my-2 line-clamp-2 md:line-clamp-none group-hover:line-clamp-none">
        {text}
      </p>
      <div className="flex gap-x-3 text-sm ">
        <button className="px-3 py-0.5 mt-2 border border-light_paragraph  dark:border-dark_paragraph rounded-md hover:text-light_headline hover:border-light_headline hover:dark:text-dark_headline hover:dark:border-dark_headline">
          <a href={github} target="_blank">
            Github
          </a>
        </button>
        {demo && (
          <button className="px-3 py-0.5 mt-2 text-light_headline dark:text-dark_headline rounded-md hover:text-light_paragraph hover:dark:text-dark_paragraph ">
            <a href={demo} target="_blank">
              Live Demo
            </a>
          </button>
        )}
        {docs && (
          <button className="px-3 py-0.5 mt-2 text-light_headline dark:text-dark_headline rounded-md hover:dark:text-dark_paragraph hover:text-light_paragraph ">
            <a href={docs} target="_blank">
              Documentation
            </a>
          </button>
        )}
      </div>
      <div className="mt-5 lg:px-10">
        <a href={preview} target="_blank">
          <img
            src={preview}
            alt={title}
            className="w-full text-center h-full rounded-t-md hover:opacity-90"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectsCards;
