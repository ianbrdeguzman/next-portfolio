import { useState, MouseEvent } from 'react';
import { IExperienceProps } from '../lib/types';
import ExperienceButton from './ExperienceButton';
import ExperienceCard from './ExperienceCard';

const Experience = ({ experience }: { experience: IExperienceProps[] }) => {
  const companies = experience.map((exp) => exp.name);
  const [selected, setSelected] = useState('Enbridge');

  const handleOnClick = (e: MouseEvent) => {
    const current = e.currentTarget.textContent;
    if (current) setSelected(current);
  };

  return (
    <section
      id="exprience"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-4/5 max-w-[900px] font-thin">
        <header className="flex relative w-full justify-end">
          <div
            data-aos="fade-right"
            className="p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 left-0 w-6/12 md:w-7/12 lg:w-8/12"
          ></div>
          <h1
            data-aos="fade-left"
            className="xs:text-2xl sm:text-3xl md:text-5xl my-4"
          >
            Experience
          </h1>
        </header>
        <main className="my-4 md:flex">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex justify-around text-gray-500 md:flex-col md:mr-4 min-w-[120px] self-start"
          >
            {companies.map((exp) => {
              return (
                <ExperienceButton
                  key={exp}
                  name={exp}
                  selected={selected}
                  onClick={handleOnClick}
                />
              );
            })}
          </div>
          <div
            className="xs:mt-4 md:mt-0 flex-1 relative h-[440px]"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {experience.map((exp) => {
              return (
                <ExperienceCard key={exp.name} selected={selected} {...exp} />
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Experience;
