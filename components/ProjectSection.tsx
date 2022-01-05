import { IProjectProps } from '../lib/types';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ projects }: { projects: IProjectProps[] }) => {
  return (
    <section
      id="project"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-4/5 max-w-[900px] font-thin">
        <header className="flex justify-between relative mb-4">
          <h2
            data-aos="fade-right"
            className="xs:text-2xl sm:text-3xl md:text-5xl my-4"
          >
            Projects
          </h2>
          <div
            data-aos="fade-left"
            className="p-0.5 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 absolute top-1/2 right-0 w-6/12 md:w-7/12 lg:w-8/12"
          ></div>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: IProjectProps, i: number) => {
            const delay = String((i + 1) * 100);
            return <ProjectCard key={project.id} delay={delay} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
