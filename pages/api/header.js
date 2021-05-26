const data = [
    {
        name: 'about',
        route: '#about',
    },
    {
        name: 'experience',
        route: '#experience',
    },
    {
        name: 'projects',
        route: '#projects',
    },
    {
        name: 'contact',
        route: '#contact',
    },
];

export default (req, res) => {
    res.status(200).json(data);
};
