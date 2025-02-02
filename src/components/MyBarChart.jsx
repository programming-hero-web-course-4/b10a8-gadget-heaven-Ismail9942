import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  Legend,
} from "recharts";

const MyBarChart = () => {
  const data = [
    { name: "Page A", pv: 2400, uv: 4000 },
    { name: "Page B", pv: 1398, uv: 3000 },
    { name: "Page C", pv: 9800, uv: 2000 },
    { name: "Page D", pv: 3908, uv: 2780 },
    { name: "Page E", pv: 4800, uv: 1890 },
    { name: "Page F", pv: 3800, uv: 2390 },
  ];

  return (
    <BarChart
      width={730}
      height={300}
      data={data}
      margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label value="Pages of my website" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis
        label={{
          value: "Page Views",
          angle: -90,
          position: "insideLeft",
          textAnchor: "middle",
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8">
        <LabelList dataKey="name" position="insideTop" angle="45" />
      </Bar>
      <Bar dataKey="uv" fill="#82ca9d">
        <LabelList dataKey="uv" position="top" />
      </Bar>
    </BarChart>
  );
};

export default MyBarChart;
