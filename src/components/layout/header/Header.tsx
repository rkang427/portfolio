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
import HamburgerMenu from '@/components/layout/header/HamburgerMenu';

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="white text-medGray p-4">
      <div className="flex justify-between  items-center md:mx-10 md:mb-5">
        <ul className="md:mb-12 flex space-x-3 items-center md:mx-10 justify-start">
          <li className="w-10 h-10 items-center">
            <Image src="/hamster.gif" alt="Loading" width={80} height={80} />
          </li>
          <li className="font-semibold text-darkGray text-2xl">Rhee Kang</li>
          <li className="font-semibold text-pine text-l">Available for work</li>
          <li className="font-semibold text-black text-sm">
            Charlotte, NC || San Jose, CA
          </li>
        </ul>
        <ul className="md:mb-12 flex space-x-3 items-center md:mx-10  justify-end">
          <li>
            <Link
              href="https://github.com/rkang427/portfolio"
              className=" items-center rounded-full border py-3 px-2.5 font-semibold text-darkGray text-sm"
            >
              <GitHubIcon
                sx={{
                  '&:hover': {
                    color: '#DFF314',
                  },
                }}
                className="items-center "
                width={60}
                height={60}
              />
            </Link>
          </li>
          <Link
            href="https://linkedin.com/in/rkang427/"
            className="items-center rounded-full border py-2.5 px-2.5 font-semibold text-darkGray text-sm"
          >
            <LinkedInIcon
              sx={{
                '&:hover': {
                  color: '#DFF314',
                },
              }}
              className="items-center"
              width={60}
              height={60}
            />
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
              href="/"
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
              <div className="hover:border-pine hover:text-pine transition delay-75 border border-medGray rounded-full px-2 py-1 text-medGray bg-white font-semibold">
                Menu
              </div>
              <HamburgerMenu />
            </div>
          </li>
        </ul>
        <div
          className={`w-full md:pl-20 ${contactOpen ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <SearchBar />
        </div>
        <ul className="flex space-x-4 whitespace-nowrap">
          <li>
            <Link
              href="https://rkang427.vercel.app/"
              className="w-full rounded-full px-2 py-1 hover:border-pine hover:text-pine transition delay-75 border border-medGray text-medGray bg-white font-semibold"
            >
              My Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-full px-2 py-1 hover:border-pine hover:text-pine transition delay-75 border border-medGray text-medGray bg-white font-semibold"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="https://dribbble.com/shots/24883719-AI-Data-Science-Machine-Learning-Template" //"/webinspo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-2 py-1 hover:text-pine hover:border-pine transition delay-75 border border-lightLime hover:bg-lightLime text-darkGray bg-lime font-semibold"
            >
              About this Site
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
