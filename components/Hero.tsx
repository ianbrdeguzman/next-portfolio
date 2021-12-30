import { Link as Scroll } from 'react-scroll';

const Hero = () => {
  return (
    <section className="flex justify-center items-center min-h-sm">
      <div className="w-4/5 xs:text-2xl sm:text-3xl md:text-5xl font-thin">
        <h1 data-aos="fade-right" className="mb-12 ">
          Hello!{' '}
          <span className="inline-block hover:animate-wiggle cursor-wait">
            👋
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className="leading-normal max-w-[800px]"
        >
          I&apos;m{' '}
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400">
            Ian De Guzman
          </span>
          , Industrial Engineer who went rogue. Front-end developer looking for
          internship, contract role or junior position.
        </p>
        <Scroll to="contact" smooth={true} duration={1000}>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="xs:my-4 sm:my-8 lg:my-12 my-8 p-0 inline-block text-xl rounded bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400"
          >
            <button className="text-xl font-thin m-0.5 rounded py-1 px-2 bg-white dark:bg-gray-900">
              Get in touch
            </button>
          </div>
        </Scroll>
      </div>
    </section>
  );
};

export default Hero;
