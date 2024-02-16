import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://res.cloudinary.com/dguaflt7t/image/upload/v1707988337/image_tngzmn.png"
              alt="Rishitha Menusha"
              className="p-100 w-70 h-70 transform translate-y-[9%] translate-x-[5%]"
              title="Rishitha Menusha"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Rishitha Menusha
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mobile App Developer",
                  2000,
                  "A Full Stack Web Developer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I am a versatile software developer with a strong foundation in a
              broad range of programming languages and technologies, including
              Dart, Java, JavaScript, Flutter, React, MySQL, MS SQL, SQLite,
              Firebase, and PHP. My expertise lies in creating dynamic and
              responsive applications across web and mobile platforms, ensuring
              high performance, scalability, and user-centric design.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-6 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Rishitha
                Menusha
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+94717071104
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Chilaw, Sri
                Lanka
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                rishitha.menush@gmai
              </h2>

              <a
                href="https://drive.google.com/file/d/1FPdOXWvHn3U_BPznqMjipPHOTAv8PVW7/view?usp=sharing"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
