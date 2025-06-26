import Intro from '@/components/main/Intro';
import ProjectSummary from '@/components/main/ProjectSummary';
import TechStack from '@/components/main/TechStack';
import Resume from '@/components/main/Resume';
import GoldenRatio from '@/components/main/GoldenRatio';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
      <div className="flex flex-col md:basis-[67%] min-h-0  ">
        <Intro />

        <div className="flex flex-col md:flex-row min-h-0">
          <div className="flex flex-col md:basis-1/2 overflow-auto min-h-0 md:mr-5">
            <ProjectSummary />
          </div>
          <div className="hidden md:block border-l border-gray-300" />

          <div className="flex flex-col md:basis-1/2 flex-grow min-h-0">
            <TechStack />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-px bg-gray-300" />

      <div className="flex flex-col md:basis-[33%] min-h-0 overflow-auto mt-4 md:mt-0">
        <Resume />
        <div className="hidden md:block border-t border-gray-300 my-2" />
        <GoldenRatio />
      </div>
    </div>
  );
}
