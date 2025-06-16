'use client';

import Link from 'next/link';
import Image from 'next/image';
//import { useState } from 'react';

import SearchBar from '@/components/layout/header/SearchBar';
import GetInTouch from '@/components/layout/header/GetInTouch';
//ultimately want to try to get to 0.02554744525 ratio for height

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="white text-medGray p-4">
      <div className="flex justify-between items-center md:mx-10 md:mb-12">
        <ul className="md:mb-12 flex space-x-3 items-baseline md:mx-10 justify-start">
          <li className="w-10 h-10">
            <Image src="/hamster.gif" alt="Loading" width={80} height={80} />
          </li>
          <li className="font-semibold text-darkGray text-2xl">Rhee Kang</li>
          <li className="font-semibold text-pine text-l">Available for work</li>
          <li className="font-semibold text-black text-sm">
            Charlotte, NC || San Jose, CA
          </li>
        </ul>
        <ul className="md:mb-12 flex space-x-3 items-baseline md:mx-10 justify-end">
          <li>
            <Link
              href="https://github.com/rkang427"
              className="items-center rounded-full border py-3 px-2.5 font-semibold text-darkGray text-sm"
            >
              <GitHubIcon className="items-center" width={60} height={60} />
            </Link>
          </li>
          <Link
            href="https://linkedin.com/in/rkang427/"
            className="items-center rounded-full border py-3 px-2.5 font-semibold text-darkGray text-sm"
          >
            <LinkedInIcon className="items-center" width={60} height={60} />
          </Link>
          <li>
            <GetInTouch open={contactOpen} setOpen={setContactOpen} />
          </li>
        </ul>
      </div>
      <nav className="container  mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="/public"
              className="hover:border-pine hover:text-pine transition delay-75 rounded-full px-2 py-1 text-medGray bg-white flex items-center space-x-2"
            >
              <div className="w-6 h-6 overflow-hidden items-center ">
                {/*{* <div className={`w-full md:pl-20 ${contactOpen ? 'opacity-20 pointer-events-none' : ''}`}> *}*/}

                <svg
                  className={`transform scale-150 origin-top-left ${contactOpen ? 'opacity-50 pointer-events-none' : ''}`}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <use
                    className={`${contactOpen ? 'opacity-20 pointer-events-none' : ''}`}
                    href="/home.svg"
                  />
                </svg>
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <div className="flex space-x-.5 items-center">
              <Link
                href="/menu"
                className="hover:border-pine hover:text-pine transition delay-75 border border-medGray rounded-full px-2 py-1 text-medGray bg-white font-semibold"
              >
                Menu
              </Link>
              <div className="border border-medGray rounded-full px-2 py-1 bg-white text-medGray hover:border-pine hover:text-pine transition delay-75 font-semibold">
                <svg
                  className="w-3 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h12M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
        <div
          className={`w-full md:pl-20 ${contactOpen ? 'opacity-20 pointer-events-none' : ''}`}
        >
          <SearchBar />
        </div>
        <ul className="flex space-x-4 whitespace-nowrap">
          <li>
            <Link
              href="/blog"
              className="w-full rounded-full px-2 py-1  hover:border-pine hover:text-pine transition delay-75 border border-medGray text-medGray bg-white font-semibold"
            >
              My Blog
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="rounded-full px-2 py-1 hover:border-pine hover:text-pine transition delay-75 border border-medGray text-medGray bg-white font-semibold"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              href="/webinspo"
              className="rounded-full px-2 py-1 hover:text-darkGray hover:border-pine transition delay-75 border border-lightLime hover:bg-lightLime text-darkGray bg-lime font-semibold"
            >
              Inspiration for this Site
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
