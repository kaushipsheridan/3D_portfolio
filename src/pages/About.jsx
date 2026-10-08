import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skillCategories } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Priyanshu
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Toronto, specializing in Software Development and Machine Learning. I have a passion for creating innovative solutions and leveraging technology to solve real-world problems. With a strong foundation in programming and a keen eye for detail, I strive to deliver high-quality software that exceeds expectations.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-10 flex flex-col gap-12'>
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h4 className='text-xl font-poppins font-semibold text-slate-700'>
                {category.title}
              </h4>

              <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {category.skills.map((skill) => (
                  <div className='flex flex-col items-center gap-3 text-center' key={skill.name}>
                    <div className='block-container h-20 w-20'>
                      <div className='btn-back rounded-xl' />
                      <div className='btn-front flex items-center justify-center rounded-xl'>
                        <img
                          src={skill.imageUrl}
                          alt={`${skill.name} logo`}
                          className='h-1/2 w-1/2 object-contain'
                        />
                      </div>
                    </div>
                    <span className='text-sm font-medium text-slate-600'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
           I have had the privilege of working with some amazing companies and teams, contributing to a variety of projects that have honed my skills and expanded my knowledge. Each experience has been a stepping stone in my journey as a software engineer, allowing me to grow both professionally and personally.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
