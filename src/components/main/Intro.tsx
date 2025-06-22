import Image from 'next/image';
import { SwitchRole } from '@/components/main/SwitchRole';
import SendIcon from '@mui/icons-material/Send';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Intro() {
  return (
    <>
      <div className="md:flex items-center justify-between  gap-10">
        <h1 className="flex items-center text-6xl font-extrabold text-darkGray py-4 mt-3">
          Hey There
          <Image
            src="/icons8-database-50.png"
            alt="Loading"
            className="text-darkGray flex-shrink-0 self-center object-contain bg-lime hover:bg-lightLime rounded-full p-2 ml-5"
            width={55}
            height={55}
          />
        </h1>

        <div className="flex justify-end items-center gap-4   p-2   mr-10">
          <div className="border-darkGray hover:border-lime hover:bg-lime border-2 rounded-full h-9 w-9 flex items-center justify-center">
            <LightModeIcon className="  text-darkGray     " />
          </div>
          <div className="border-darkGray hover:border-lime hover:bg-lime border-2 rounded-full h-9 w-9 flex items-center justify-center">
            <SendIcon className="h-7 w-7 text-darkGray   rounded-full" />
          </div>
          <div className="border-darkGray hover:border-lime hover:bg-lime border-2 rounded-full h-9 w-9 flex items-center justify-center">
            <LocalSeeIcon className="h-7 w-7 text-darkGray   rounded-full" />
          </div>{' '}
        </div>
      </div>
      <h2 className="w-[90%] text-3xl font-semibold text-darkGray py-4">
        My name is Rhee, a <SwitchRole /> <br />
        with a growing love for Software Engineering. This portfolio is a
        reflection of{' '}
        <a
          href="\blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine hover:text-lime underline"
        >
          what I’ve learned
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/rkang427"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine hover:text-lime underline"
        >
          what I’m continuing to explore.
        </a>{' '}
        Thanks for stopping by!
      </h2>
      <div className="hidden md:block border-t border-gray-300 w-full h-0.5 " />
    </>
  );
}
