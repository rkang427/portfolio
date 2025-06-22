import AddIcon from '@mui/icons-material/Add';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
export default function Resume() {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <span className="absolute text-7xl italic text-lime -rotate-12 pointer-events-none select-none z-0">
          Figma
        </span>
        <a
          href="https://tinyurl.com/figmark840"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10"
        >
          <Image src="/qrcode.svg" width="120" height="120" alt="qr code" />
        </a>
      </div>

      <div className="md:space-x-4 justify-items-center">
        <h1 className="pl-4 text-lg font-extrabold text-darkGray py-2"> </h1>
        <a
          href="https://rkresume.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 flex items-center justify-between text-lg rounded-md font-semibold bg-lime hover:bg-lightLime text-darkGray px-3 py-2 mb-4"
        >
          <span>General Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray hover:bg-lightLime" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray hover:bg-lightLime-200" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray hover:bg-lightLime" />
          </div>
        </a>
        <a
          href="https://rkresume.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 flex items-center justify-between text-lg rounded-md font-semibold border-2 border-lightGray hover:bg-lightLime text-darkGray px-3 py-2 mb-4"
        >
          <span>Data Science Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightLime" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightLime" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightLime-200" />
          </div>
        </a>
        <a
          href="https://rkresume.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 flex items-center justify-between text-lg rounded-md font-semibold border-2 border-lightGray hover:bg-lightLime text-darkGray px-3 py-2 mb-4"
        >
          <span>Full Stack Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightLime-200" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightLimegreen-200" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray ml-auto hover:text-lightLime-200" />
          </div>{' '}
        </a>
      </div>
    </>
  );
}
