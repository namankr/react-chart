import React from "react";

import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";


const data1 = [
    { name: "Bubble Sold %", value: 100 }
];

const Graph3 = (d) => {

    const energyPercentage = d.data.energyPercentage;

    const data = [
        { name: "covered %", value: energyPercentage },
        { name: "Left %", value: 100 - energyPercentage }
    ];

    const CustomLabel = ({ viewBox, d }) => {
        const { cx, cy } = viewBox;
        const { energyPercentage, energyBaseLinePercentage } = d.data;
        let percentageAboveBaseLine = null; let percentageBelowBaseLine = null; let atBaseLine = null
        if (energyPercentage > energyBaseLinePercentage) {
          percentageAboveBaseLine = Math.round((energyPercentage) / (energyBaseLinePercentage) * 100);
        } else if (energyPercentage === energyBaseLinePercentage) {
          atBaseLine = "atBaseLine";
        } else {
          percentageBelowBaseLine = 100 - Math.round((energyPercentage) / (energyBaseLinePercentage) * 100);
        }
    
        console.log("under pleasantness", percentageAboveBaseLine, percentageBelowBaseLine, atBaseLine);
    
        return (
          <React.Fragment>
            <text x={cx - 20} y={cy + 60}>
              <tspan
                style={{
                  fontWeight: "bold",
                  fontSize: "0.7500em",
                  fill: "#FFFFFF",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  lineHeight: "14px"
                }}
              >
                Energy
                  </tspan>
            </text>
            <text x={cx - 55} y={cy + 80}>
              <tspan
                style={{
                  fontSize: "0.8em",
                  fill: "#FFFFFF",
                  fontFamily: "Roboto"
                }}
              >
                {percentageBelowBaseLine != null && `${percentageBelowBaseLine}% Below baseline`}
                {percentageAboveBaseLine != null && `${percentageAboveBaseLine}% Abobe baseline`}
                {atBaseLine != null && 'At Baseline'}
    
              </tspan>
            </text>
          </React.Fragment>
        );
      };
    

    return (
        <ResponsiveContainer width="40%" aspect={0.7}>
            <PieChart width={33} height={33}>
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={42} fill="#E07900" blendStroke="#E07900" opacity="0.2" />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    dataKey="value"
                    innerRadius={30}
                    outerRadius={43}
                    strokeOpacity={0}
                >
                    {data.map((entry, index) => {
                        if (index === 1) {
                            return <Cell key={`cell-${index}`} fill="#E07900" opacity="0.2" />;
                        }
                        return <Cell key={`cell-${index}`} fill="#E07900" />;
                    })}

                    <Label
                        value={data[0].value + "%"}
                        position="center"
                        fill="#FFFFFF"
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            width: "47px",
                            height: "28px",
                            lineHeight: "28px",
                            letterSpacing: "0.531272px",
                            textTransform: "uppercase",
                        }}
                    />

                    <Label
                        value={data[0].value}
                        content={<CustomLabel d={d} />}
                        position="inside"
                        fill="grey"
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                            marginTop: "100px"
                        }}
                    />

                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Graph3;