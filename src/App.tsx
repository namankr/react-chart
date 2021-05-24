
// For learning not to be used 

import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector , Cell, Label} from "recharts";

const data = [
  { name: "Group A", value: 20 },
  { name: "Group B", value: 80 },
];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.value + "%"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
     
    </g>
  );
};

export default function App() {
  const [activeIndex] = useState(0);
  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#0F6E8C"
        dataKey="value"
      />
    </PieChart>
  );
}
