import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='dark:bg-gray-900 p-4 text-center text-2xl text-white'>
            <div className='flex justify-center'>
                <Link href='mailto:ianbrdeguzman@gmail.com'>
                    <a className='dark:hover:text-blue-700 transition hover:animate-bounce'>
                        <FaRegEnvelope />
                    </a>
                </Link>
                <Link href='/'>
                    <a className='mx-8 dark:hover:text-blue-700 transition hover:animate-bounce'>
                        <FaLinkedin />
                    </a>
                </Link>
                <Link href='/'>
                    <a className='dark:hover:text-blue-700 transition hover:animate-bounce'>
                        <FaGithub />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
