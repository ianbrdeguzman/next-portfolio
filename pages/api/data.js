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
            role: 'Service Desk',
            city: 'Toronto',
            country: 'Canada',
            fromDate: 'December 2020',
            toDate: 'Present',
            task: [
                'Provide Service Desk technical support to users either via phone or email as required.',
                'Provide advanced troubleshooting for all types of technical inquiries, service requests, and issues involving computers, network, smartphones/tablets, enterprise applications/systems.',
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
};

export default (req, res) => {
    res.status(200).json(data);
};
