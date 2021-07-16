import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='dark:bg-gray-900 p-4 text-center text-xl text-black dark:text-gray-200'>
            <div className='flex justify-center py-4'>
                <a
                    href='mailto:ianbrdeguzman@gmail.com'
                    target='_blank'
                    className='transform hover:scale-125 transition'
                >
                    <FiMail />
                </a>

                <a
                    href='https://www.linkedin.com/in/ian-de-guzman-377583139/'
                    target='_blank'
                    className='mx-8 transform hover:scale-125 transition'
                >
                    <FiLinkedin />
                </a>
                <a
                    href='https://github.com/ianbrdeguzman'
                    target='_blank'
                    className='transform hover:scale-125 transition'
                >
                    <FiGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
