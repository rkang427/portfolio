import Image from 'next/image';
import { SwitchRole } from '@/components/main/SwitchRole';
export default function Intro() {
  return (
    <>
      <div className="md:flex items-center justify-baseline gap-10">
        <h1 className="text-6xl font-extrabold text-darkGray py-4">
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
      <h2 className="w-[80%] text-3xl font-semibold text-darkGray py-4">
        My name is Rhee, a <SwitchRole /> <br />
        with a growing love for Software Engineering. I discovered how every{' '}
        <a
          href="https://github.com/rkang427"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine hover:text-lime underline"
        >
          coding side quest
        </a>{' '}
        and{' '}
        <a
          href="\blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine hover:text-lime underline"
        >
          class taken
        </a>{' '}
        was a learning adventure in disguise. I’d be honored to share what I
        learn along the way!
      </h2>
      <div className="hidden md:block border-t border-gray-300 w-full h-0.5 " />
    </>
  );
}
