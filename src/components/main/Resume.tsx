import AddIcon from '@mui/icons-material/Add';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';

export default function Resume() {
  return (
    <>
      <Box
        sx={{
          width: 170,
          height: 170,
          bgcolor: 'var(--superLightGray)',
          borderRadius: 4,
          border: '1px solid var(--darkGray)',
          marginTop: 4,
          alignSelf: 'center',
        }}
      ></Box>
      <div className="md:space-x-4 ">
        <h1 className="pl-4 text-lg font-extrabold text-darkGray py-4"> </h1>
        <a
          href="https://rkresume.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-lg rounded-md font-semibold bg-lime hover:bg-lightLime text-darkGray px-3 py-2 mb-4"
        >
          <span>General Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray hover:bg-lightGray" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray hover:bg-lightGray" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray hover:bg-lightGray" />
          </div>
        </a>
        <h2 className="flex items-center justify-between text-lg rounded-md font-semibold border-2 border-lightGray hover:bg-lightLime text-darkGray px-3 py-2 mb-4">
          <span>Data Science Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
          </div>
        </h2>
        <h2 className="flex items-center justify-between text-lg rounded-md font-semibold border-2 border-lightGray hover:bg-lightLime text-darkGray px-3 py-2 mb-4">
          <span>Full Stack Resume</span>
          <div className="flex items-center justify-between gap-2">
            <AddIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
            <SettingsEthernetIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
            <ArrowOutwardIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
          </div>
        </h2>{' '}
      </div>
    </>
  );
}
