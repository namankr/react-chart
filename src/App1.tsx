import React from "react";

import { PieChart, Pie, Label, Cell } from "recharts";

const data = [
  { name: "Bubble Sold %", value: 25 },
  { name: "Bubble Left %", value: 75 }
];

function App1() {
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={60}
          outerRadius={80}
        >
          {data.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
            }
            return <Cell key={`cell-${index}`} fill="#0F6E8C" />;
          })}
          
          <Label
            value={data[0].value + "%"}
            position="center"
            fill="grey"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              width:"47px",
              height:"28px",
              lineHeight: "28px",
              letterSpacing: "0.531272px",
              textTransform: "uppercase",
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
}

export default App1;