import { IExperienceButtonProps } from '../lib/types';

const ExperienceButton = ({
  name,
  selected,
  onClick
}: IExperienceButtonProps) => {
  return (
    <div
      className={`flex justify-center flex-1 ${
        name === selected
          ? 'bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400'
          : 'bg-gray-100 bg-opacity-10'
      }`}
    >
      <div
        className={`flex-1 mb-0.5 md:mb-0 md:ml-0.5 flex justify-center ${
          name === selected
            ? 'bg-gray-100 dark:bg-gray-800'
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <button
          className={`focus:outline-none py-4 flex-1 transition duration-300 max-h-[57px] ${
            name === selected
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400 font-semibold'
              : 'border-b border-gray-100 border-opacity-10 md:border-l md:border-b-0'
          }`}
          onClick={onClick}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default ExperienceButton;
