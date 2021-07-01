import ReactGA from 'react-ga';

const GA_TRACKING_ID = 'UA-194832336-1';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (url) => {
    console.log(`Logging pageview for ${url}`);
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
};
