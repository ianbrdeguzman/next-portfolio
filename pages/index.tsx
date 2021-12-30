import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import { Link as Scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { IAppProps } from '../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fs = require('fs').promises;
    const path = require('path');

    const rawData = await fs.readFile(
      path.resolve(process.cwd(), 'lib/data.json')
    );
    const data = JSON.parse(rawData);
    const { about, experience, projects, contact } = data;

    return {
      props: {
        about,
        experience,
        projects,
        contact
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};

const Home = ({ about, experience, projects, contact }: IAppProps) => {
  const { text, education, skills } = about;
  const { enbridge, samsung, accenture } = experience;
  const [show, setShow] = useState(false);

  const showScrollToTop = () => {
    if (window.scrollY > window.screen.height) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showScrollToTop);
    return () => {
      window.removeEventListener('scroll', showScrollToTop);
    };
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 relative">
      {show && (
        <Scroll
          to="header"
          smooth={true}
          duration={1000}
          className="fixed bottom-8 right-8 xs:invisible md:visible transition-all"
        >
          <button className="text-2xl focus:outline-none hover:animate-bounce p-2">
            ☝️
          </button>
        </Scroll>
      )}
      <Hero />
      <About text={text} education={education} skills={skills} />
      <Experience enbridge={enbridge} samsung={samsung} accenture={accenture} />
      <Project projects={projects} />
      <Contact text={contact.text} />
    </div>
  );
};

export default Home;
