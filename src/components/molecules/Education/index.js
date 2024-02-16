import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Bachelor of Computer Science */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bachelor of Computer Science
              </h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the academic criteria for my
              Bachelor of Computer Science degree. <br />
              (Current GPA - 3.44)
            </p>
          </div>

          {/* Freelancer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Freelancer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                2021 - Present
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              As an experienced freelancer, I focus on creating mobile apps and
              websites, and also do graphic design. I work with clients
              worldwide on Fiverr, Upwork, and other sites. I always aim to
              provide great work that fits what each project needs.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Assignment Healper
              </h3>
              <p className="text-sm text-neutral font-semibold">
                2021 - Present
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I help BSc and MSc Computer Science students, and others studying
              IT degrees, with their assignments. Since 2021, I've been
              providing support to make their study journey easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
