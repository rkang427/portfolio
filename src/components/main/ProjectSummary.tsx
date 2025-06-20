import Box from '@mui/material/Box';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
export default function ProjectSummary() {
  return (
    <>
      <div className=" flex flex-col h-full">
        <h1 className="font-bold">Projects</h1>
        <Box
          sx={{
            width: 240,
            height: 150,
            bgcolor: 'var(--lightGray)',
            borderRadius: 4,
          }}
        ></Box>

        <div className="md:flex justify-baseline gap-10 mt-3">
          <Box
            sx={{
              width: 140,
              height: 150,
              bgcolor: 'var(--superLightGray)',
              borderRadius: 4,
            }}
          >
            <div className="flex justify-end items-start m-2 space-x-2">
              <CodeIcon className="align-right rounded-full  hover:border-pine hover:text-lime   border-darkGray ml-auto  " />
              <ArrowOutwardIcon className="align-right rounded-full bg-lime   border-darkGray ml-auto hover:bg-lightGray" />
            </div>
          </Box>
          <Box
            sx={{
              width: 140,
              height: 150,
              bgcolor: 'var(--lightGray)',
              borderRadius: 4,
            }}
          >
            <div className="flex justify-end items-start m-2 space-x-2">
              <CodeIcon className="align-right rounded-full hover:border-pine hover:text-lime   border-darkGray ml-auto  " />
              <ArrowOutwardIcon className="align-right rounded-full bg-lime   border-darkGray ml-auto hover:bg-lightGray" />
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
