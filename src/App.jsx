import wallpaper from "./assets/pagewallpaper.jpg";
import { FaCode as FrontEndIcon } from "react-icons/fa";
import { GrDatabase as DatabaseIcon } from "react-icons/gr";
import { GrDeploy as DeployIcon } from "react-icons/gr";
import { IoMail as MailIcon } from "react-icons/io5";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { FaLongArrowAltUp as UpIcon } from "react-icons/fa";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={homeRef}
      className="relative min-w-[1920px] overflow-x-hidden flex flex-col gap-2 pb-18"
    >
      <div
        onClick={() => {
          scrollTo(homeRef);
        }}
        className="fixed right-8 bottom-8 hover:scale-105 transition-all z-999"
      >
        <UpIcon className="text-[32px] text-white bg-[#1B7CF0] p-4 rounded-full hover:cursor-pointer"></UpIcon>
      </div>
      <img
        src={wallpaper}
        className="opacity-20 fixed min-w-full select-none -z-999"
        draggable="false"
      />
      <div className="mx-auto mt-16 w-100 h-25 bg-black opacity-66 flex flex-col rounded-xl shadow-black shadow-md">
        <div className="text-white mt-6 mx-8 font-semibold">
          <span className="text-[#1B7CF0]">const</span> developer ={" "}
          <span className="text-[#1B7CF0]">{"{name: "}</span>'Nguyen Ha Huan'
          <span className="text-[#1B7CF0]">{"}"}</span>;
        </div>
        <div className="text-white mt-2 mx-8 font-semibold">
          <span className="text-[#1B7CF0]">console</span>.log
          <span className="text-[#1B7CF0]">{"("}</span>
          'Nice to meet you!'<span className="text-[#1B7CF0]">{")"}</span>;
        </div>
      </div>

      <div>
        <div className="text-center font-semibold text-[48px] text-[#363636] drop-shadow-gray-400 drop-shadow-md">
          Full Stack Developer
        </div>
        <div className="text-center font-semibold text-[32px] text-[#1B7CF0] drop-shadow-gray-400 drop-shadow-md">
          Building modern, user-friendly solutions
        </div>
        <div className="text-center font-medium text-[32px] text-[#4b4b4b] drop-shadow-gray-400 drop-shadow-md">
          Focused on creating fast, reliable, and easy-to-use web experiences.
        </div>
      </div>

      <div className="flex flex-row gap-12 text-[16px] pb-2 mt-8 w-full justify-center">
        <div
          onClick={() => {
            scrollTo(projectRef);
          }}
          className="bg-[#1B7CF0] w-50 h-12 flex justify-center items-center text-white rounded-md shadow-black select-none shadow-md
        hover:scale-105 transition-all hover:cursor-pointer"
        >
          View my works →
        </div>
        <div
          onClick={() => {
            scrollTo(contactRef);
          }}
          className="text-[#1B7CF0] w-40 h-12 flex justify-center items-center bg-white rounded-md shadow-black select-none shadow-md
        hover:scale-105 transition-all hover:cursor-pointer"
        >
          🖂 Contact me
        </div>
      </div>

      <div className="flex flex-row pb-2 mt-56">
        <div className="ml-96 mt-8 w-96 h-96 shadow-sm shadow-black  rounded-md overflow-hidden">
          <img
            className="h-full w-full"
            src="https://cdn.hstatic.net/products/200000462939/10006_1c37674a6c3f4687b65cd9a2fb5c53b5_master.jpg"
          ></img>
        </div>
        <div className="flex flex-col ml-16">
          <div className="font-semibold  text-[48px] drop-shadow-md drop-shadow-gray-400">
            About <span className="text-[#1B7CF0]">me</span>
          </div>

          <div className="mt-8 text-[22px] text-gray-600 font-semibold">
            I’m <span className="text-[#1B7CF0]">Nguyễn Hà Huân</span>, a young
            passionate developer in Vietnam.
            <br />
            My passion for programming drives my journey toward becoming a
            full-stack developer.
            <br /> I’m currently a student at Can Tho University, continuously
            learning and working toward my goals.
          </div>

          <div className="flex flex-row text-[20px] font-semibold text-[#0b4d9c] gap-8 pb-2 mt-36">
            <div className="relative overflow-hidden rounded-md hover:scale-105 transition-all">
              <div className="bg-[#1B7CF0] opacity-20 w-full h-full absolute"></div>
              <div className="p-2 px-8 ">Quick Learner</div>
            </div>
            <div className="relative overflow-hidden rounded-md hover:scale-105 transition-all">
              <div className="bg-[#1B7CF0] opacity-20 w-full h-full absolute"></div>
              <div className="p-2 px-8 ">Hard Worker</div>
            </div>
            <div className="relative overflow-hidden rounded-md hover:scale-105 transition-all">
              <div className="bg-[#1B7CF0] opacity-20 w-full h-full absolute"></div>
              <div className="p-2 px-8 ">Team Player</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 flex flex-col items-center  drop-shadow-md drop-shadow-gray-400">
        <div className="text-[48px] font-semibold">
          Technical <span className="text-[#1B7CF0]">Expertise</span>
        </div>
        <div className="flex flex-row mt-8 gap-12">
          <div className="w-74 h-56 bg-white shadow-md shadow-black rounded-xl hover:scale-103 transition-all">
            <FrontEndIcon className="w-[24px] bg-[#1B7CF0] text-[white] p-2 rounded-md mt-4 mx-4"></FrontEndIcon>
            <div className="px-4 text-[24px] font-semibold">
              Frontend Development
            </div>
            <ul className="text-[20px]">
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="w-74 h-56 bg-white shadow-md shadow-black rounded-xl hover:scale-103 transition-all">
            <DatabaseIcon className="w-[24px] bg-[#1B7CF0] text-[white] p-2 rounded-md mt-4 mx-4"></DatabaseIcon>
            <div className="px-4 text-[24px] font-semibold">
              Backend & Database
            </div>
            <ul className="text-[20px]">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="w-74 h-56 bg-white shadow-md shadow-black rounded-xl hover:scale-103 transition-all">
            <DeployIcon className="w-[24px] bg-[#1B7CF0] text-[white] p-2 rounded-md mt-4 mx-4"></DeployIcon>
            <div className="px-4 text-[24px] font-semibold">Tools</div>
            <ul className="text-[20px]">
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        ref={projectRef}
        className="mt-40 flex flex-col items-center  drop-shadow-md drop-shadow-gray-400"
      >
        <div className="text-[48px] font-semibold">
          Featured <span className="text-[#1B7CF0]">Projects</span>
        </div>
        <div className="w-[90%] flex flex-row mt-8 gap-12 pb-2">
          <ProjectCard
            img=""
            name="QuizCit"
            desc="Provide online quizzes and forum for students"
            code="https://github.com/kongfa155/NoSQLProject"
            demo="https://www.quiz.id.vn/"
          ></ProjectCard>
          <ProjectCard
            img=""
            name="QuizCit"
            desc="Provide online quizzes and forum for students"
            code="https://github.com/kongfa155/NoSQLProject"
            demo="https://www.quiz.id.vn/"
          ></ProjectCard>
          <ProjectCard
            img=""
            name="QuizCit"
            desc="Provide online quizzes and forum for students"
            code="https://github.com/kongfa155/NoSQLProject"
            demo="https://www.quiz.id.vn/"
          ></ProjectCard>
        </div>
      </div>

      <div ref={contactRef} className="flex flex-col mt-40 pb-48 gap-12">
        <div className="text-[48px] font-semibold text-center">
          Contact <span className="text-[#1B7CF0]">Me</span>
        </div>
        <div className="w-[80%] bg-white mx-auto h-120 shadow-sm shadow-black rounded-lg flex flex-row">
          <div className="w-[40%] flex flex-col gap-8">
            <div className="font-semibold text-[36px] mt-16 ml-16">
              Get In Touch
            </div>
            <div className="ml-8 flex flex-row items-center">
              <MailIcon className="text-[32px] bg-[#1B7CF0] text-[white] p-2 rounded-md mt-4 mx-4"></MailIcon>
              <div className="mt-2 text-[18px]">
                Email
                <br />
                <span className="font-thin">nhhun2005@gmail.com</span>
              </div>
            </div>
            <div className="ml-8 flex flex-row items-center">
              <PhoneIcon className="text-[32px] bg-[#1B7CF0] text-[white] p-2 rounded-md mt-4 mx-4"></PhoneIcon>
              <div className="mt-2 text-[18px]">
                Phone
                <br />
                <span className="font-thin">0354023611</span>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col">
            <div className="mt-40 w-[100px] h-[8px] bg-[#1B7CF0] rounded-md"></div>
            <div className="mt-8 text-[18px]">
              Whether you have a project in mind or a collaboration ideas, feel
              free to contact me.<br></br> I always welcome fellow developers
              and potential collaborators
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nhhun2005@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="no-underline mt-12 pt-2 text-[18px] font-semibold text-[white] w-40 h-12 flex justify-center items-center bg-[#1B7CF0] rounded-md shadow-black select-none hover:cursor-pointer shadow-md
        hover:scale-105 transition-all"
            >
              🖂 Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ img, name, desc, code, demo }) {
  return (
    <div className="relative min-h-80 max-w-160 bg-white shadow-black shadow-md flex flex-col pb-32 rounded-md overflow-clip">
      <img
        className="max-h-[50%]"
        src={
          img == ""
            ? "https://cdn.hstatic.net/products/200000462939/10006_1c37674a6c3f4687b65cd9a2fb5c53b5_master.jpg"
            : img
        }
      />
      <div className="py-2 px-4 font-semibold text-[22px]">{name}</div>
      <div className="py-2 px-4 font-thin text-[20px]">{desc}</div>
      <div className="flex flex-row absolute bottom-4 gap-4 w-full justify-center text-[18px]">
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="no-underline bg-[#1B7CF0] w-40 h-12 flex justify-center items-center text-white rounded-md shadow-black select-none shadow-md
        hover:scale-105 transition-all hover:cursor-pointer"
        >
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="no-underline text-[#1B7CF0] w-40 h-12 flex justify-center items-center bg-white rounded-md shadow-black select-none shadow-md
        hover:scale-105 transition-all hover:cursor-pointer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
