import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Project from '../components/Project';
import { Link as Scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  try {
    const fs = require('fs').promises;
    const path = require('path');

    const rawData = await fs.readFile(
      path.resolve(process.cwd(), 'lib/data.json')
    );
    const data = JSON.parse(rawData);

    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.log(error);
  }
};

const Home = ({ data: { about, experience, projects, contact } }) => {
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
      <About data={about} />
      <Experience data={experience} />
      <Project data={projects} />
      <Contact data={contact} />
    </div>
  );
};

export default Home;
