import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <div className="min-h-lg dark:bg-gray-900"></div>;
};

export default Custom404;
