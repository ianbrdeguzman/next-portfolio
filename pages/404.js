import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

    return <div class='min-h-lg dark:bg-gray-900'></div>;
};

export default Custom404;
