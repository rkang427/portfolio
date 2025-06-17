import AddIcon from '@mui/icons-material/Add';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Resume() {
  return (
    <>
        <div className="md:space-x-4 ">
      <h1 className="pl-4 text-lg font-extrabold text-darkGray py-4"> </h1>

      <h2 className="flex items-center justify-between text-lg rounded-md font-semibold bg-lime hover:bg-lightLime text-darkGray px-3 py-2 mb-4">
        <span>Frontend SWE Resume</span>
        <div className="flex items-center justify-between gap-2">
          <AddIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
          <SettingsEthernetIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
          <ArrowOutwardIcon className="rounded-full border border-darkGray ml-auto hover:bg-lightGray" />
        </div>
      </h2>

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
      </h2> </div>
    </>
  );
}
