import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineCodepenCircle,
  AiOutlineSend,
} from "react-icons/ai";
import { BsEnvelopeCheck } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { TiDeviceLaptop, TiFlowMerge, TiEdit, TiBook } from "react-icons/ti";

import Cards from "../components/Cards";
import ProjectsCards from "../components/ProjectsCards";
import { Reveal } from "./utils/Reveal";
import ParticleBackground from "../components/ParticleBackground";

function Home() {
  //circle text
  useEffect(() => {
    let circle = new CircleType(document.getElementById("circle-text"));
  }, []);
  const [sendLoading, setSendLoading] = useState(false);
  const [success, setSucccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSendLoading(true);

    emailjs
      .sendForm(
        "service_rqqrqz6",
        "template_b6wge9j",
        e.target,
        "tli93z_jHrekN7-M1"
      )
      .then(
        (result) => {
          setSucccess(true);
          setTimeout(() => {
            setSucccess(false);
            setSendLoading(false);
          }, 3000);
        },
        (error) => {
          setSendLoading(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      );
  };

  return (
    <>
      <ParticleBackground />
      {/* Hero Section */}
      <section
        className=" text-light_headline dark:text-slate-100  h-[500px] md:h-[800px] text-center w-fit relative animate__animated animate__fadeIn m-auto z-[1] py-40"
        id="home"
      >
        <div className="animate_animated fadeInUp">
          <Link to={"contact"} smooth={true} spy={true} activeClass="active">
            <div className="absolute left-[-32px] top-[182px] w-16 h-16 rounded-full flex items-center justify-center text-3xl hover:bg-slate-200 dark:hover:bg-dark_highlights transition-all cursor-pointer">
              <AiOutlineArrowDown />
            </div>
          </Link>

          <div
            id="circle-text"
            className="text-sm uppercase absolute text-light_highlights dark:text-[#d0c032]"
          >
            Let's talk ✦ .Contact me ✦ .
          </div>
        </div>

        <div className="dark:text-dark_paragraph">
          <Reveal>
            <h4 className="text-sm md:text-xl font-thin cursor-default uppercase relative text-center">
              Hey! I'm
            </h4>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center justify-center pt-5 md:pt-5 gap-x-2">
              <div className="h-[2px] w-[100px] md:w-[200px] relative bg-slate-700"></div>
              <div className="h-[2px] w-[20px] relative bg-slate-400"></div>
              <div className="h-[2px] w-[100px] md:w-[200px] relative bg-slate-700"></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-5 md:mt-10 cursor-default text-light_headline dark:text-dark_headline">
              MAR JOHN
              <br />
              CORNELIO
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex items-center justify-center pt-5 md:pt-10 gap-x-2">
              <div className="h-[2px] w-[100px] md:w-[200px] relative bg-slate-700"></div>
              <div className="h-[2px] w-[20px] relative bg-slate-400"></div>
              <div className="h-[2px] w-[100px] md:w-[200px] relative bg-slate-700"></div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h4 className="text-sm md:text-xl font-thin cursor-default mt-5 md:mt-5 uppercase">
              a passionate and aspiring web developer
            </h4>
          </Reveal>
        </div>

        <div className="flex gap-x-5 text-lg md:text-3xl justify-center py-5 pt-6 dark:text-slate-400 social_account">
          <Reveal delay={0.35}>
            <a
              href="https://github.com/mjcornelio"
              target="_blank"
              className="hover:text-slate-700 dark:hover:text-slate-500 transition-all animate__animated"
            >
              <AiFillGithub />
            </a>
          </Reveal>
          <Reveal delay={0.4}>
            <a
              href="https://web.facebook.com/marjohn.cornelio/"
              target="_blank"
              className="hover:text-slate-700 dark:hover:text-slate-500 transition-all"
            >
              <AiFillFacebook />
            </a>
          </Reveal>
          <Reveal delay={0.45}>
            <a
              href="https://www.linkedin.com/in/marjohn-cornelio/"
              target="_blank"
              className="hover:text-slate-7000 dark:hover:text-slate-500 transition-all"
            >
              <AiFillLinkedin />
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <a
              href="https://codepen.io/marjcornelio"
              target="_blank"
              className="hover:text-slate-700 dark:hover:text-slate-500 transition-all"
            >
              <AiOutlineCodepenCircle />
            </a>
          </Reveal>
        </div>
      </section>
      {/* About Section*/}
      <section
        className="relative px-10 md:px-10 py-[112px] text-xl z-[1] mt-1 min-h-[450px]  bg-light_secondary dark:bg-dark_secondary"
        id="about"
      >
        <div className="max-w-7xl m-auto">
          <Reveal>
            <div>
              <h2 className="text-light_headline dark:text-dark_headline text-3xl md:text-5xl font-semibold mb-5">
                About
              </h2>
            </div>
          </Reveal>

          <div className=" block lg:flex text-light_paragraph dark:text-dark_paragraph gap-10">
            <div className="lg:w-1/2 font-normal  lg:pr-5 text-sm md:text-lg">
              <Reveal delay={0.1}>
                <p>
                  I am 23 years old and always had a passion for learning more
                  about web development. I graduated from Bulacan State
                  University - Sarmiento Campus with a Bachelor of Science in
                  Information Technology.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5">
                  <span className="text-light_highlights dark:text-dark_highlights">
                    I am proficient in HTML, CSS, and JavaScript, and I am
                    always up-to-date on the latest front-end libraries and
                    frameworks.
                  </span>
                  &nbsp; I am passionate about creating engaging user
                  experiences, and I believe that web development is a powerful
                  tool that can be used to make a positive impact on the world.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <a
                  href="/portfolio/resume/CORNELIO-MarJohn.pdf"
                  target="_blank"
                  title="Resume"
                >
                  <button className="btn mt-5 border-2 border-light_highlights dark:border-dark_highlights hover:opacity-80 text-light dark:text-dark_headline text-light_headline px-8 py-2 rounded-md flex items-center  group/item transition-all">
                    Resume
                    <span className="animate__animated group-hover/item:translate-x-1.5 transition-all">
                      <AiOutlineArrowRight className="ml-2 text-lg " />
                    </span>
                  </button>
                </a>
              </Reveal>
            </div>

            <div className="lg:w-1/2 font-normal mt-10 lg:mt-0 ">
              <Reveal delay={0.3}>
                <img
                  src="/portfolio/img/profile.jpg"
                  className=" tilt w-[450px] m-auto sepia-[.40] rounded-md drop-shadow-md"
                  alt="profile"
                />
              </Reveal>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto mt-[112px]">
          <div>
            <Reveal delay={0.25}>
              <h2 className="text-ligth_headline dark:text-dark_headline text-2xl md:text-4xl font-semibold mb-5 text-center">
                What I Do
              </h2>
            </Reveal>
            <Reveal>
              <div className="lg:flex gap-10 mt-10">
                <Cards
                  icon={<TiDeviceLaptop />}
                  title="FrontEnd"
                  text="Creating engaging user interfaces using HTML, CSS, JavaScript, and frameworks such as React.js"
                />

                <Cards
                  icon={<TiFlowMerge />}
                  title="Backend"
                  text="Building server-side applications using Node.js and Express.js."
                />
                <Cards
                  icon={<TiEdit />}
                  title="Design"
                  text="Crafting visually appealing designs that align with your brand identity and target audience."
                />
                <Cards
                  icon={<TiBook />}
                  title="Learner"
                  text="I thrive on adapting to new challenges and quickly grasping new concepts."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section
        className="relative px-10 md:px-10 py-[112px] text-xl z-[1]  "
        id="projects"
      >
        <div className="max-w-7xl m-auto">
          <div className=" block lg:flex flex-row-reverse text-light_paragraph dark:text-dark_paragraph gap-10 relative">
            <div className="lg:w-2/5 font-normal  lg:pr-5 text-sm md:text-lg lg:sticky top-40 left-0 h-fit mb-10">
              <Reveal>
                <div>
                  <h2 className="text-light_headline dark:text-dark_headline text-3xl md:text-5xl font-semibold mb-5">
                    Featured Projects
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Discover a collection of my recent projects that truly
                  showcase my expertise in web development. Dive deeper into the
                  websites I've crafted, where I've seamlessly integrated
                  innovative design concepts and code I've written. Using a
                  variety of technologies including HTML, CSS, JavaScript,
                  React, and Node.js,
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <a
                  href="https://github.com/mjcornelio"
                  target="_blank"
                  title="Github Repo"
                >
                  <button className="btn mt-5 bg-light_highlights dark:bg-dark_highlights hover:opacity-80 text-light dark:text-dark_headline px-8 py-2 rounded-md flex items-center  group/item transition-all">
                    Github Repo
                    <span className="animate__animated group-hover/item:translate-x-1.5 transition-all">
                      <AiOutlineArrowRight className="ml-2 text-lg " />
                    </span>
                  </button>
                </a>
              </Reveal>
            </div>
            <div className="lg:w-3/5 font-normal mt-10 lg:mt-0  px-0 lg:px-20 ">
              <Reveal>
                <ProjectsCards
                  preview="/portfolio/projects_preview/qhelp.gif"
                  title="QHelp"
                  subheading="Qualimed Ticketing System"
                  text="The IT Helpdesk Ticketing System provide an efficient and user-friendly solution for managing IT support requests and resolving technical issues."
                  github="https://github.com/mjcornelio/qhelp"
                  tech={[
                    {
                      name: "Tailwind",
                      icon: "devicon-tailwindcss-plain colored",
                    },
                    { name: "ReactJs", icon: "devicon-react-original colored" },
                    { name: "NodeJs", icon: "devicon-nodejs-plain colored" },
                    {
                      name: "ExpressJs",
                      icon: "devicon-express-original colored",
                    },
                    {
                      name: "MySQL",
                      icon: "devicon-mysql-plain colored",
                    },
                  ]}
                />
              </Reveal>
              <Reveal>
                <ProjectsCards
                  preview="/portfolio/projects_preview/r&a.gif"
                  title="R&A"
                  subheading="Property Rental Management System"
                  text="A web-based property rental management system for R&A Surewin Marketplace, that handles the business’ transactions and records, like the daily rental collection, parking fees, production of business reports, and many more."
                  github="https://github.com/mjcornelio/surewin-marketplace"
                  docs="https://drive.google.com/file/d/1Kzqg2yClvywliJU5KLX9H5_OXJAjf_Ml/view?usp=sharing"
                  tech={[
                    {
                      name: "MaterialUi",
                      icon: "devicon-materialui-plain colored",
                    },
                    { name: "ReactJs", icon: "devicon-react-original colored" },
                    { name: "NodeJs", icon: "devicon-nodejs-plain colored" },
                    {
                      name: "ExpressJs",
                      icon: "devicon-express-original colored",
                    },
                    {
                      name: "MySQL",
                      icon: "devicon-mysql-plain colored",
                    },
                    {
                      name: "Sequelize",
                      icon: "devicon-sequelize-plain colored",
                    },
                  ]}
                />
              </Reveal>
              <Reveal>
                <ProjectsCards
                  preview="/portfolio/projects_preview/drs.gif"
                  title="DRS"
                  subheading="Document Request System"
                  text="A web-based property rental management system for R&A Surewin Marketplace, that handles the business’ transactions and records, like the daily rental collection, parking fees, production of business reports, and many more."
                  github="https://github.com/mjcornelio/document-request-system"
                  demo="http://document-request.epizy.com"
                  tech={[
                    {
                      name: "HTML",
                      icon: "devicon-html5-plain-wordmark colored",
                    },
                    {
                      name: "css",
                      icon: "devicon-css3-plain-wordmark colored",
                    },
                    {
                      name: "JavaScript",
                      icon: "devicon-javascript-plain colored",
                    },
                    {
                      name: "MySQL",
                      icon: "devicon-mysql-plain colored",
                    },
                    {
                      name: "PHP",
                      icon: "devicon-php-plain colored",
                    },
                  ]}
                />
              </Reveal>
              <Reveal>
                <ProjectsCards
                  preview="/portfolio/projects_preview/netflix_clone.gif"
                  title="Netflix Clone"
                  subheading="Website Clone - Bayan Academy"
                  text="A website clone built using React.js as project for Bayan Academy - Advance Frontend Development. This involves creating a Frontend that replicates the experience of a popular movie database, utilizing The Movie Database (TMDB) API to fetch movies."
                  github="https://github.com/mjcornelio/netflix-clone"
                  demo="https://netflix-clone-b2767.web.app/"
                  tech={[
                    { name: "ReactJs", icon: "devicon-react-original colored" },
                    {
                      name: "Firebase",
                      icon: "devicon-firebase-plain colored",
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section*/}
      <section
        className="relative px-10 md:px-10 py-[112px] pb-20 text-xl z-[1] mt-1 min-h-[450px] bg-light_secondary dark:bg-dark_secondary "
        id="contact"
      >
        <div className="max-w-7xl m-auto">
          <div className="lg:px-10 text-center">
            <Reveal>
              <h2 className="dark:text-dark_headline text-light_headline text-3xl md:text-5xl font-semibold mb-5">
                Contact Me
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="dark:text-dark_paragraph text-light_paragraph  italic text-sm lg:text-lg">
                Get in touch with me for any inquiries or collaboration
                opportunities.
              </p>
            </Reveal>
          </div>
          <div className="flex justify-center md:px-40 lg:px-60">
            <div className="w-full ">
              <form className="mt-10" onSubmit={sendEmail} ref={form}>
                <Reveal delay={0.25}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      className="bg-light dark:bg-dark border border-dark text-light_headline text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-700 dark:text-dark_headline dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="bg-light dark:bg-dark border border-dark text-light_headline text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-700 dark:text-dark_headline dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      className="bg-light dark:bg-dark border border-dark text-light_headline text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-700 dark:text-dark_headline dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  {" "}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      className="bg-light dark:bg-dark border border-dark text-light_headline text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-slate-700 dark:text-dark_headline dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      rows={4}
                      required
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.45}>
                  <button
                    className="btn mt-2 bg-light_highlights dark:bg-dark_highlights text-light hover:opacity-80 dark:text-dark_headline px-8 py-2 rounded-md flex items-center  group/item transition-all text-sm md:text-lg disabled:opacity-75"
                    disabled={sendLoading}
                    type="submit"
                  >
                    <span className=" transition-all flex items-center">
                      {sendLoading ? (
                        success ? (
                          <>
                            Success
                            <BsEnvelopeCheck className="ml-2 text-lg group-hover/item:translate-x-1.5 transition-all " />
                          </>
                        ) : (
                          <>
                            Sending
                            <RiMailSendLine className="ml-2 animate-[shake_1s_ease-in-out_infinite] text-lg group-hover/item:translate-x-1.5 transition-all " />
                          </>
                        )
                      ) : (
                        <>
                          Submit
                          <AiOutlineSend className="ml-2 text-lg group-hover/item:translate-x-1.5 transition-all" />
                        </>
                      )}
                    </span>
                  </button>
                </Reveal>
              </form>
            </div>
          </div>
        </div>
        {success && (
          <div
            class="flex p-4 mb-4 text-sm text-green-800 rounded-md w-fit absolute right-2 bottom-0 bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Success!</span> Email has been sent.
            </div>
          </div>
        )}
        {error && (
          <div
            class="flex p-4 mb-4 text-sm text-slate-100 rounded-md w-fit absolute right-2 bottom-0 bg-red-500 dark:bg-gray-800 dark:text-slate-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Error!</span> Please try again.
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
