'use client';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Customized,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

//from graphql
type api = {
  viewer: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: {
          contributionDays: {
            date: string;
            contributionCount: number;
          }[];
        }[];
      };
    };
  };
};
type day =
  api['viewer']['contributionsCollection']['contributionCalendar']['weeks'][number]['contributionDays'][number];

function TextWithCircle({ x, y }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={243} cy={0} r={20} fill="#DFF314" />
      <text
        x={243}
        y={12}
        textAnchor="right"
        fill="black"
        fontSize={12}
        fontWeight="bold"
      >
        <tspan x={228}>This Week&apos;s</tspan>
        <tspan x={228} dy="1.2em">
          Github Activity
        </tspan>
      </text>
    </g>
  );
}
export default function ContributionGraph() {
  const [data, setData] = useState<{ data?: api }>({});
  useEffect(() => {
    async function loadData() {
      const stat = await fetch('/api/github-contributions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const json = await stat.json();
      setData(json);
    }

    loadData();
  }, []);

  const pastWeekData =
    data?.data?.viewer?.contributionsCollection?.contributionCalendar?.weeks?.at(
      -1,
    );
  const tmp = pastWeekData?.contributionDays?.map((day: day) => ({
    date: day.date,
    github_commits: day.contributionCount ?? 1,
  }));

  return (
    <div style={{ width: '90%', height: 200 }}>
      <ResponsiveContainer>
        <LineChart data={tmp}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="github_commits"
            stroke="#6AB873"
            fill="#DFF314"
          />
          <Customized component={<TextWithCircle x={100} y={50} />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
