"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "TECH-SAVVY VIRTUAL ASSISTANT",
    description: ["Aqlem.org", "THIGROUP.CO.UK"],
  },
  {
    title: "Web Development",
    description: ["WebRemarks", "E-COMMERCE SITES"],
  },
  {
    title: "Quality Assurance (QA) & Testing",
    description: ["SpeechLab.ai", "Quiz Gecko"],
  },
 
  {
    title: "Digital Marketing & SEO Strategy",
    description: ["WebRemarks", "Kaliber Global"],
  },
  {
    title: "Social Media Management",
    description: ["WebRemarks", "Kaliber Global"],
  },
  {
    title: "E-Commerce Excellence",
    description: ["Nail Care Products on Amazon", "Shopify Stores"],
  },
  {
    title: "Graphic Designing",
    description: ["SpeechLab.ai", "Quiz Gecko"],
  },
  {
    title: "Content Writing",
    description: ["SpeechLab.ai", "Quiz Gecko"],
  },
  {
    title: "Digital Product Management",
    description: ["SpeechLab.ai", "Quiz Gecko"],
  },
];

const projectsPerPage = 3;

const MyWorkSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <div id="work" className="flex gap-10 justify-center bg-black items-start">
      <div className="flex px-6 py-16 md:px-16 flex-col max-w-7xl">
        <div className="flex flex-wrap gap-10 pb-10 justify-between items-center w-full rounded-xl max-md:max-w-full">
          <div className="self-stretch my-auto text-4xl font-light leading-none text-white">
            <span className="text-5xl font-medium text-white leading-[59px]">My</span>{" "}
            <span className="text-5xl italic font-semibold text-pink-700 leading-[59px]">Work</span>
          </div>
        </div>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1198px] xl:h-[450px]">
          {paginatedProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-12 my-auto bg-pink-700 rounded-xl border border-solid backdrop-blur-[15px] border-white border-opacity-10 min-w-[240px]"
            >
              <div className="leading-9 text-center text-white font-bold xl:h-[50px] text-2xl uppercase">
                {project.title}
              </div>
              <div className="self-center mt-8 text-2xl font-bold text-center uppercase">
                PROJECTS
              </div>
              <div className="px-9 py-4 mt-8 w-full text-md font-semibold leading-5 text-center uppercase bg-white rounded-2xl">
                {project.description.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
              <div className="mt-8 px-2 my-auto max-w-full mx-auto font-semibold bg-[#F4BE00] rounded-lg min-h-[36px] w-[150px] flex justify-center items-center text-center">
                Show Details
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-8 items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-200 rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FaArrowLeft />
          </button>
          
          {/* Scrollable Dots Pagination */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${currentPage === index + 1 ? "bg-[#D01760]" : "bg-gray-400"} cursor-pointer`}
                onClick={() => setCurrentPage(index + 1)}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-200 rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;
