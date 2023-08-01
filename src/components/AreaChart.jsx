import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const AreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 50 }}>
        <Line
          type="monotone"
          dataKey="count"
          stroke="#cf9c10"
          strokeWidth={3}
        />
        <CartesianGrid
          stroke="#cf9c106c"
          strokeDasharray="10 10"
          strokeWidth={2}
        />
        <XAxis dataKey="date" stroke="#222" />
        <YAxis allowDecimals={false} stroke="#222" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
