import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-28 lg:h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:pb-5 lg:py-10 text-center md:text-left">
          About Teo
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto md:pt-5 lg:pt-20">
          <p
            className="leading-loose text-2xl md:text-3xl lg:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title} I am currently a member of{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              target="_blank"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col order-2 md:order-1">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                To get into contact with me, send an{" "}
                <a
                  href={`mailto:${userData.email}`}
                  target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  e-mail
                </a>{" "}
                and I'll get back to you quickly!
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                If you think I might be a good fit to work with you, please check out my{" "}
                <a
                  href={userData.resumeUrl}
                  target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{" "}
                and reach out!
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 order-1 md:order-2 ml-2 md:ml-0">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                style={{whiteSpace: 'break-spaces'}}
              >
                {desc}
              </p>
            ))}
            <div className="border-4">
              <h1 className="bg-red-500 text-3xl rounded-md px-3 py-1 inline-block font-bold text-gray-50 mx-4 my-4">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-2">
              {/* <h1 className="bg-red-500 text-3xl rounded-md inline-block font-bold px-5 my-auto text-gray-50">
                Tech Stack: 
              </h1> */}
              <img
                  src="python.png"
                  className="h-20 w-20 mx-4 my-4"
                />
              <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="dbx.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="pyspark_square.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="sql.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="arcgis.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="qgis.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="tableau.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="pbi.jpg"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src='ERlogo.png'
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="html.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="css.png"
                  className="h-20 w-20 mx-4 my-4"
                />
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
