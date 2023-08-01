import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from 'recharts';

const GraphChart = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid
          stroke="#cf9c106c"
          strokeDasharray="10 10"
          strokeWidth={2}
        />
        <XAxis dataKey="date" stroke="#222" />
        <YAxis stroke="#222" />
        <Tooltip />
        <Bar dataKey="count" fill="#cf9c10" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
