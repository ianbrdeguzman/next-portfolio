import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='dark:bg-gray-900 p-4 text-center text-xl text-gray-400 dark:text-gray-200'>
            <div className='flex justify-center py-4'>
                <a
                    href='mailto:ianbrdeguzman@gmail.com'
                    target='_blank'
                    className='hover:text-blue-700 dark:hover:text-blue-700 transition hover:animate-bounce'
                >
                    <FiMail />
                </a>

                <a
                    href='https://www.linkedin.com/in/ian-benedict-de-guzman-377583139/'
                    target='_blank'
                    className='mx-8 hover:text-blue-700 dark:hover:text-blue-700 transition hover:animate-bounce'
                >
                    <FiLinkedin />
                </a>
                <a
                    href='https://github.com/ianbrdeguzman'
                    target='_blank'
                    className='hover:text-blue-700 dark:hover:text-blue-700 transition hover:animate-bounce'
                >
                    <FiGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
