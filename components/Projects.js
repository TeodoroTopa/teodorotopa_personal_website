import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-28 lg:h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:pb-5 lg:py-10 text-center md:text-left">
          Projects
        </h1>


      </div>

      
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <p className = 'max-w-6xl mx-auto font-medium'>
      Here are some examples of my work. I’ve included coursework and personal projects, as well as some things I’ve done professionally. Unfortunately, my most recent work can’t be shared publicly. Please reach out if you have questions regarding skills that aren’t on display here!
      </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} target="_blank" className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 right-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
