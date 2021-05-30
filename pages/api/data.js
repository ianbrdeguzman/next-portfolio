const data = {
    about: {
        text: {
            one: 'Hi! my name is Ian De Guzman, an Industrial Engineering graduate who turned Front-End developer with the focus on building fast, clean and maintanable code.',
            two: 'Currently, based in Toronto, Canada. I am a self-taught, passionate, and hardworking developer looking forward to collaborate and learn from engineers who are much smarter than me while building applications that solve problems and are used by thousands.',
        },
        skills: {
            frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Redux'],
            backend: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Nextjs'],
            styling: [
                'SASS/SCSS',
                'Styled Components',
                'CSS Modules',
                'Tailwind CSS',
                'Material UI',
            ],
            others: ['Vercel', 'Heroku', 'Netlify', 'Postman', 'Git / Github'],
        },
    },
    experience: {
        enbridge: {
            name: 'Enbridge',
            role: 'Service Desk Analyst',
            city: 'Toronto',
            country: 'Canada',
            fromDate: 'December 2020',
            toDate: 'Present',
            task: [
                'Provide Service Desk technical support to users either via phone or email as required.',
                'Provide troubleshooting for all types of technical inquiries, service requests, and issues involving computers, network, smartphones/tablets, enterprise applications/systems.',
                'Develop, implement, and/or participate in the preparation knowledge base articles and/or documentation for Service Desk use; make recommendations for improvements.',
            ],
        },
        samsung: {
            name: 'Samsung Electronics',
            role: 'Process Improvement Systems Analyst',
            city: 'Sydney',
            country: 'Australia',
            fromDate: 'October 2019',
            toDate: 'July 2020',
            task: [
                'Successfully lead the Direct Payment project (Online Booking Service System) for Australian Consumers.',
                'In charge of User Acceptance Testing on behalf of Australian subsidiary for all ongoing system changes and enhancements.',
                'Analyses business requirements and enhance systems that would benefit all parties.',
            ],
        },
        accenture: {
            name: 'Accenture',
            role: 'Senior Application Support Analyst',
            city: 'Manila',
            country: 'Philippines',
            fromDate: 'August 2013',
            toDate: 'February 2017',
            task: [
                'Experience in providing application support for SAP applications such as BusinessObjects, BASIS & Security and SAP GRC.',
                'Ticket creation, troubleshooting and resolving incidents within agreed service level.',
                'Create documents and procedures for IT knowledge base.',
            ],
        },
    },
    projects: [
        {
            id: 1,
            name: 'Portfolio v1',
            description:
                'Version 1 of my portfolio. Using Nextjs react framework. Includes TailwindCSS dark mode theme toggle, api routes for data fetching and form submission.',
            todos: ['Better styling', 'Better animation', 'Add more projects'],
            challenge:
                'Some of the challenge was deployment on Vercel, encountered CORS error, invalid auth using gmail smtp and missing environment variables.',
            solution:
                'Solution was to introduce a api cors middleware. Creating an app password for gmail account and adding envoronment variables via Vercel cli.',
            technologies: ['Nextjs', 'TailwindCSS', 'Nodemailer'],
            demo: 'https://next-portfolio-2nepu4hk9-ianbrdeguzman.vercel.app/',
            repo: 'https://github.com/ianbrdeguzman/next-portfolio',
            image: {
                desktop: '/portfolio-v1-desktop.png',
                mobile: '/portfolio-v1-mobile.png',
            },
        },
        {
            id: 2,
            name: 'Amazon Clone',
            description:
                'A full stack Amazon clone MERN App, includes image carousel, product page, cart page and checkout steps with paypal checkout. User login, registration and ability to view order history.',
            todos: ['Ability to search', 'Admin dashboard', 'Stripe checkout'],
            challenge:
                'Biggest challenge was deploying backend on heroku, found out that Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB',
            solution:
                'Solution I came up with is to have multiple connection for each model',
            technologies: [
                'React',
                'Redux',
                'TailwindCSS',
                'Nodejs',
                'MongoDB',
            ],
            demo: 'https://trusting-banach-dba1ca.netlify.app/',
            repo: 'https://github.com/ianbrdeguzman/amazon-clone',
            image: {
                desktop: '/amazon-clone-desktop.png',
                mobile: '/amazon-clone-mobile.png',
            },
        },
        {
            id: 3,
            name: 'Todo App',
            description:
                'This project was a challenge from Frontend Mentor, it include ability to create, update, filter, delete todos. Has light and dark theme mode. The first project I worked with Redux, Nodejs, Expressjs and MongoDB Atlas. Learned alot with this simple app.',
            todos: ['Ability to sort todos via drag and drop'],
            challenge:
                'Biggest challenge was implementing sort todos via drag and drop.',
            solution:
                'Have not come up with a solution yet, but I am leaning towards React Beautiful D&D. Need to revist this project in the future.',
            technologies: [
                'React',
                'Redux',
                'CSS Modules',
                'Nodejs',
                'MongoDB',
            ],
            demo: 'https://mern-todo-app-1f57a.web.app/',
            repo: 'https://github.com/ianbrdeguzman/mern-todo-app',
            image: {
                desktop: '/todo-app-desktop.png',
                mobile: '/atodo-app-mobile.png',
            },
        },
        {
            id: 4,
            name: 'Youtube Clone',
            description:
                'A Youtube clone, powered by Youtube API. Features includes paginated homepage, skeleton loading, search videos & channels, embeded video player. Firebase authorization. Ability to subscibe, comment and view liked videos and subscribed channels.',
            todos: [
                'Like and unlike a video',
                'Unsubscribe to a channel',
                'Fix warnings and bugs',
            ],
            challenge:
                'Biggest challenge was styling, I want it as close as possible as I can. Another thing was state management, after this project I started learning Redux.',
            solution:
                'My solution was to use CSS modules to avoid CSS classes collision.',
            technologies: [
                'React',
                'Context',
                'CSS Module',
                'Firebase',
                'Youtube API',
            ],
            demo: 'https://clone-65d7e.web.app/',
            repo: 'https://github.com/ianbrdeguzman/react-youtube-clone',
            image: {
                desktop: '/youtube-clone-desktop.png',
                mobile: '/youtube-clone-mobile.png',
            },
        },
        {
            id: 5,
            name: 'Covid-19 Tracker',
            description:
                'A Covid-19 tracker that shows todays covid cases, recovered and deaths around the world. Shows world map and affected countries, history of cases within the last 90 days.',
            todos: ['Light and Dark Theme', 'Sort highest cases table'],
            challenge:
                'Biggest challenge Leafletjs map, spent days figuring out how React Leaflet works and how to make it appear on screen.',
            solution: 'The simple solution was it needs a fixed height.',
            technologies: [
                'React',
                'Material UI',
                'React Chart',
                'React Leaflet',
                'Disease.sh API',
            ],
            demo: 'https://react-covid-19-tracker-b1c40.web.app/',
            repo: 'https://github.com/ianbrdeguzman/react-covid-19-tracker',
            image: {
                desktop: '/covid-19-desktop.png',
                mobile: '/covid-19-mobile.png',
            },
        },
        {
            id: 6,
            name: 'Designo Client',
            description:
                'A Frontend Mentor challenge. A multipage fictitious client website. This was my first big project using Styled Components.',
            todos: [
                'Form submission API',
                'Separate data file for each component',
            ],
            challenge:
                'Tried my best to style as close to the challenge as possible.',
            solution: 'Learned to adapt based on props.',
            technologies: ['React', 'Styled Components', 'React Leaflet'],
            demo: 'https://designo-multipage.web.app/',
            repo: 'https://github.com/ianbrdeguzman/react-fem-designo',
            image: {
                desktop: '/designo-multipage-desktop.png',
                mobile: '/designo-multipage-mobile.png',
            },
        },
    ],
    contact: {
        text: 'My inbox is always open, whether you want to reach out or provide feedback on how to improve my work. Feel free to send me a message and I will try to get back to you as soon as I can. Cheers!',
    },
};

export default (req, res) => {
    res.status(200).json(data);
};
