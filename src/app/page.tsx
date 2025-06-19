import Intro from '@/components/main/Intro';
import Resume from '@/components/main/Resume';
import GoldenRatio from '@/components/main/GoldenRatio';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 h-full ">
        <div className="md:basis-[67%]">
          <Intro />
        </div>

        <div className="hidden md:block border-l border-gray-300  self-stretch" />
        <div className="md:basis-[33%]">
          <Resume />
          <div className="hidden md:block border border-gray-300  self-stretch" />
          <GoldenRatio />
        </div>
      </div>
    </>
  );
}
