import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import { IProjectCardProps } from '../lib/types';

const ProjectCard = ({
  delay,
  id,
  repo,
  name,
  description,
  technologies,
  demo
}: IProjectCardProps) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      key={id}
      className="rounded min-h-[300px] flex flex-col border p-4 group"
    >
      <header className="flex justify-end">
        <Link href={repo}>
          <a
            target="_blank"
            className="text-black text-xl dark:text-white transform hover:scale-125 transition"
          >
            <FiGithub />
          </a>
        </Link>
      </header>
      <Link href={`/project/${id}`} passHref>
        <main className="flex-1 my-4 flex flex-col cursor-pointer">
          <h3 className="text-xl md:text-2xl font-normal group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-600 group-hover:via-pink-500 group-hover:to-red-400">
            {name}
          </h3>
          <p className="my-4 flex-1 line-clamp-4">{description}</p>
          <div className="flex flex-wrap">
            {technologies.map((item, i) => {
              return (
                <span
                  key={i}
                  className="mr-1 mb-1 bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 rounded"
                >
                  <span className="m-0.5 px-2 rounded bg-white dark:bg-gray-900 text-sm block">
                    {item}
                  </span>
                </span>
              );
            })}
          </div>
        </main>
      </Link>
      <footer className="flex justify-end">
        <Link href={demo}>
          <a
            target="_blank"
            className="text-black text-xl dark:text-white transform hover:scale-125 transition"
          >
            <MdOpenInNew />
          </a>
        </Link>
      </footer>
    </article>
  );
};

export default ProjectCard;
