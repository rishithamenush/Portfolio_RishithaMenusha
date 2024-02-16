import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLayers } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      icon: <FaMobileAlt />,

      description: (
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] text-center">
          "I develop mobile apps with Flutter, Swift, Java, and other
          technologies to meet specific client needs and requirements.",
        </p>
      ),
    },
    {
      id: 2,
      title: "FullStack Development",
      icon: <FiLayers />,
      description: (
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] text-center">
          "I am very familiar with ReachJS, and MongoDB/Mongoose. So I can build
          full-stack application with FullStack Development.",
        </p>
      ),
    },
    {
      id: 3,
      title: "Assignment Healper",
      icon: <MdSchool />,
      description: (
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] text-center">
          "I help students with their assignments, offering support in various
          subjects to improve their understanding and boost their grades.",
        </p>
      ),
    },
    {
      id: 4,
      title: "Web Development",
      icon: <FaCode />,
      description: (
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] text-center">
          "I offer web development services, creating fully responsive static
          websites using HTML, CSS, and modern frameworks like Bootstrap and
          Tailwind, ensuring your site looks great on any device.",
        </p>
      ),
    },

    {
      id: 5,
      title: "Database Management",
      icon: <FaDatabase />,
      description: (
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] text-center">
          "I specialise in connecting web databases to servers and solving any
          database-related issues using advanced techniques. My expertise
          ensures seamless operation and optimised database performance for your
          projects.",
        </p>
      ),
    },
  ];
  return (
    <div
      className="py-20 parent"
      // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${
              service.id % 2 === 0
                ? "bg-accent shadow-lg"
                : "bg-[#313131] shadow-md"
            } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
