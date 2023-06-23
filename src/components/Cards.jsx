import React from "react";

function Cards({ icon, text, title }) {
  return (
    <div className="relative text-center p-5 bg-light border-slate-400 dark:bg-dark dark:border-slate-700 border rounded-lg drop-shadow-md mt-8 lg:mt-0 w-full lg:w-1/4 cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl">
      <div className=" text-light_headline dark:text-dark_headline absolute -top-5 right-[50%] translate-x-2/4 text-3xl font-thin bg-light border-slate-400 dark:bg-dark dark:border-slate-700 border-t rounded-full p-3">
        {icon}
      </div>

      <h4 className="font-normal mt-10 text-lg text-light_headline dark:text-dark_headline">
        {title}
      </h4>
      <p className="text-sm leading-snug text-light_paragraph dark:text-dark_paragraph my-2">
        {text}
      </p>
    </div>
  );
}

export default Cards;
