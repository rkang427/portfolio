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
          <h1 className="font-semibold">Recent Projects</h1>
        <div className="md:flex justify-center gap-10 mt-3">
          <Box
            sx={{
              width: 180,
              height: 140,
              bgcolor: 'var(--superLightGray)',
              borderRadius: 4,
            }}
          >
            <div className="flex justify-end items-start m-1 space-x-2">
                <a href="https://github.com/rkang427/TSA" target="_blank" rel="noopener noreferrer">
              <CodeIcon className="align-right rounded-full  hover:border-pine hover:text-lime   border-darkGray ml-auto  " />
                </a>
                <a href="https://thescholarshipacademy2025report.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ArrowOutwardIcon className="align-right rounded-full bg-lime   border-darkGray ml-auto hover:bg-lightGray" />
                </a>
            </div>
              <div className="mx-2 mb-3">
              <h1 className="mb-1 font-semibold">The Scholarship Academy</h1>
                  <p className="m-2 font-light text-xs">A non-profit dashboard for school, district, and statewide impact.</p></div>
          </Box>
          <Box
            sx={{
              width: 180,
              height: 140,
              bgcolor: 'var(--lightGray)',
              borderRadius: 4,
            }}
          >
            <div className="flex justify-end items-start m-1 space-x-2">
                <a href="https://github.com/rkang427/crAIvings" target="_blank" rel="noopener noreferrer">
                    <CodeIcon className="align-right rounded-full  hover:border-pine hover:text-lime   border-darkGray ml-auto  " />
                </a>
                <a href="https://craivings.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ArrowOutwardIcon className="align-right rounded-full bg-lime   border-darkGray ml-auto hover:bg-lightGray" />
                </a>
            </div>
              <div className="m-1">
              <h1 className="mx-1 mb-1 font-semibold">CrAIVings</h1>
              <p className="mx-2 font-light text-xs">Serverless DB recommending restaurants based on token.</p></div>
          </Box>
        </div>
      </div>
    </>
  );
}
