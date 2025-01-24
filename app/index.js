// pages/index.js
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>Three.js in Next.js</h1>
      <ThreeScene />
    </div>
  );
};

export default HomePage;
