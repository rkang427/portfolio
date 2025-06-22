import Intro from '@/components/main/Intro';
import ProjectSummary from '@/components/main/ProjectSummary';
import TechStack from '@/components/main/TechStack';
import Resume from '@/components/main/Resume';
import GoldenRatio from '@/components/main/GoldenRatio';
// import Head from 'next/head';
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-stretch  h-[100%] overflow-hidden">
        <div className="md:basis-[67%] flex flex-col min-h-0 overflow-auto">
          <Intro />
          <div className="flex items-center min-h-0">
            <div className="md:basis-[50%] flex flex-col flex-grow: 1 overflow-auto min-h-0 mr-5">
              <ProjectSummary />
            </div>
            <div className="hidden md:block border-l border-gray-300 self-stretch" />
            <div className="w-full md:basis-[50%] flex flex-col overflow-auto min-h-0 ">
              <TechStack />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-px bg-gray-300 self-stretch" />
        <div className="md:basis-[33%] flex flex-col h-full mb-4 overflow-auto">
          <Resume />
          <div className="hidden md:block border-t border-gray-300 self-stretch" />
          <GoldenRatio />
        </div>
      </div>
    </>
  );
}
