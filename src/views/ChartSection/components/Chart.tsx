import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { OperationsType } from 'utils/types';

type ChartPropsType = {
  data: OperationsType;
}

const Chart = ({ data }: ChartPropsType) => (
  <ResponsiveContainer
    width="100%"
    height={500}
  >
    <AreaChart
      barCategoryGap={1}
      data={data}
    >
      <Legend
        verticalAlign="top"
        iconType="plainline"
      />
      <XAxis
        dataKey="date"
        axisLine={false}
        tickMargin={10}
        minTickGap={30}
        tickSize={4}
        tick={{
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: '300',
          stroke: '#9b9b9b',
          strokeWidth: 0.5,
        }}
      />
      <YAxis
        yAxisId="left"
        axisLine={false}
        tickMargin={10}
        minTickGap={30}
        tickSize={4}
        tick={{
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: '300',
          stroke: '#9b9b9b',
          strokeWidth: 0.5,
        }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        axisLine={false}
        tickMargin={10}
        minTickGap={30}
        tickSize={4}
        tick={{
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: '300',
          stroke: '#9b9b9b',
          strokeWidth: 0.5,
        }}
      />
      <Tooltip
        contentStyle={{
          border: '1px solid #e5e5e5',
        }}
      />
      <Area
        yAxisId="left"
        type="monotone"
        dataKey="transfers_count"
        stroke="#1ece9f"
        strokeWidth={2}
        dot={false}
        fillOpacity={0.5}
        fill="#92e3a9"
        activeDot={{ r: 6 }}
        name="Transfers count"
      />
      <Area
        yAxisId="right"
        type="monotone"
        dataKey="avg_transfer_value"
        stroke="#000000"
        fillOpacity={0}
        strokeWidth={3}
        activeDot={{ r: 6 }}
        name="Average transfer value"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Chart;
