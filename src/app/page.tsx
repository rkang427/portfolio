import Intro from '@/components/main/Intro';
import ProjectSummary from '@/components/main/ProjectSummary';
import TechStack from '@/components/main/TechStack';
import Resume from '@/components/main/Resume';
import GoldenRatio from '@/components/main/GoldenRatio';
// import Head from 'next/head';
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch  h-[100%] overflow-hidden">
        <div className="md:basis-[67%] flex flex-col min-h-0 overflow-auto">
          <Intro />
          <div className="flex flex-1 justify-evenly items-center min-h-0">
            <div className="flex flex-col flex-grow overflow-auto min-h-0">
              <ProjectSummary />
            </div>
            <div className="hidden md:block border-l border-gray-300 self-stretch" />
            <div className="flex flex-col flex-grow overflow-auto min-h-0">
              <TechStack />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-px bg-gray-300 self-stretch" />
        <div className="md:basis-[33%] flex flex-col h-full space-y-4 overflow-auto">
          <Resume />
          <div className="hidden md:block border-t border-gray-300 self-stretch" />
          <GoldenRatio />
        </div>
      </div>
    </>
  );
}
