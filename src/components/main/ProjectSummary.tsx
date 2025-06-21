import Box from '@mui/material/Box';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
// import { LineChart } from '@mui/x-charts/LineChart';
import ContributionGraph from '@/components/main/ContributionGraph';
export default function ProjectSummary() {
  return (
    <>
      <div className="flex flex-col justify-center h-full mt-3">
        {/*<LineChart*/}
        {/*  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}*/}
        {/*  series={[*/}
        {/*    {*/}
        {/*      data: [2, 5.5, 2, 8.5, 1.5, 5],*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  width={400}*/}
        {/*  height={300}*/}
        {/*/>*/}
        <ContributionGraph />

        <div className="md:flex justify-center gap-10 mt-3">
          <Box
            sx={{
              width: 150,
              height: 160,
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
              width: 150,
              height: 160,
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
