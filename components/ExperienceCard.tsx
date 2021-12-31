import Link from 'next/link';
import { animated, useTransition } from 'react-spring';
import { IExperienceCardProps } from '../lib/types';

const ExperienceCard = ({
  selected,
  name,
  role,
  city,
  country,
  fromDate,
  toDate,
  task
}: IExperienceCardProps) => {
  const transition = useTransition(selected, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 100 }
  });

  return selected === name
    ? transition(
        (style, item) =>
          item && (
            <animated.article className="absolute top-0 left-0" style={style}>
              <h3 className="text-xl md:text-2xl font-normal">
                {role} @{' '}
                <Link href="https://www.enbridge.com/">
                  <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-bold">
                    {name}
                  </a>
                </Link>
              </h3>
              <p className="md:text-xl">
                {city}, {country}
              </p>
              <p className="mb-4 md:text-xl">
                {fromDate} - {toDate}
              </p>
              <ul className="md:text-xl list-square list-inside list-blue-700">
                {task.map((item, i) => {
                  return (
                    <li key={i} className="text-blue-700 mb-4">
                      <span className="text-black dark:text-white">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </animated.article>
          )
      )
    : null;
};

export default ExperienceCard;
