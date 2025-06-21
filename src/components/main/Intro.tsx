import Image from 'next/image';
import { SwitchRole } from '@/components/main/SwitchRole';
export default function Intro() {
  return (
    <>
      <div className="md:flex items-center justify-baseline gap-10">
        <h1 className="text-6xl font-extrabold text-darkGray py-4 mt-3">
          Hey There
        </h1>
        <Image
          src="/icons8-database-50.png"
          alt="Loading"
          className="flex-shrink-0 self-center object-contain bg-lime rounded-full px-3 py-3"
          width={50}
          height={50}
        />
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
